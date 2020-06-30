
const workspace = Blockly.inject('blockly',
    {media: 'assets/media/', toolbox: document.getElementById('toolbox')});
$(document).ready(function () {
    const token = "pk.eyJ1IjoidmluaG50IiwiYSI6ImNqb2VqdXZvaDE4cnkzcG80dXkxZzlhNWcifQ.G6sZ1ukp_DhiSmCvgKblVQ";
    const origin = [25.946159640346714, -97.31792449951172];
    let radius = 5, zoom = 13;
    const tgeo = new ThreeGeo({
            tokenMapbox: token,
        }
    );
    mapboxgl.accessToken = token;
    const mapid = document.getElementById('map');
    var map = new mapboxgl.Map({
        container: mapid,
        style: 'mapbox://styles/mapbox/satellite-v9', // stylesheet location
        center: [-97.31792449951172, 25.946159640346714 ], // starting position [lng, lat]
        zoom: zoom // starting zoom
    })
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    )
    const btnPlay = document.getElementById('play-button');
    const btnUpload = document.getElementById('importGLTF');
    const btnImportToScene = document.getElementById('importToScene');
    const CANVAS_WIDTH = 450;
    const CANVAS_HEIGHT = 300;
    const container = document.getElementById("three-content");

    var MIXER, CLOCK;
    CLOCK = new THREE.Clock();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH/CANVAS_HEIGHT,0.1,100 );
    camera.position.set( 0, 2,  2 );
    camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

    scene.background = new THREE.Color( 0xa0a0a0 );
    scene.fog = new THREE.Fog( 0xa0a0a0, 10, 22 );

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    hemiLight.position.set( 0, 20, 0 );
    scene.add( hemiLight );

    let light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 20, 10 );
    scene.add( light );

    var grid = new THREE.GridHelper( 10, 100, 0x000000, 0x000000 );
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add( grid );

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
    container.appendChild( renderer.domElement );
    // window.addEventListener( 'resize', onWindowResize, false );
    let controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.update();
    function render() {
        requestAnimationFrame( render );
        controls.update();
        let dt = CLOCK.getDelta();
        if ( MIXER ) MIXER.update( dt );
        renderer.render( scene, camera );
    }
    render();

    tgeo.getTerrain(origin, radius, zoom, {
        onRgbDem: (meshes) => { // your implementation when terrain's geometry is obtained
            let terrain = new THREE.Group();
            terrain.name = 'terrain';
            meshes.forEach((mesh) => {
                terrain.add(mesh);
                mesh.applyMatrix(new THREE.Matrix4().makeRotationX(THREE.Math.degToRad(-90)));
            });
            scene.add(terrain);

            let loader = new THREE.GLTFLoader();
            loader.load(`./models/RobotExpressive.glb`, function (myscene) {
                const { proj, unitsPerMeter } = tgeo.getProjection(origin, radius);

                let actions ={};
                let previousAction =null;
                let activeAction =null;
                let mymodel = myscene.scene;
                let isStartAnimation = false;
                mymodel.name = 'mymodel';
                mymodel.visible = false;
                mymodel.scale.set(0.1,0.1,0.1);

                scene.add(mymodel);
                if (myscene.animations && myscene.animations.length) {
                    MIXER = new THREE.AnimationMixer(myscene.scene);
                    for (let clip of myscene.animations) {
                        let action = MIXER.clipAction(clip);
                        actions[clip.name] = action;
                        action.clampWhenFinished = true;
                    }
                }
                activeAction = actions[ 'Idle' ];
                activeAction
                    .reset()
                    .setEffectiveTimeScale( 1 )
                    .setEffectiveWeight( 1 )
                    .fadeIn( 0.2 )
                    .play();
                btnPlay.addEventListener('click',function (event) {
                    let modelId = scene.getObjectByName('mymodel');
                    const [x0, y0] = proj([25.940463660701752,  -97.34307289123535]);
                    modelId.position.set(x0,0,-y0);
                    if(!isStartAnimation){
                        previousAction = activeAction;
                        activeAction = actions[ 'Walking' ];
                        if ( previousAction !== activeAction ) {

                            previousAction.fadeOut( 0.2 );

                        }
                        activeAction
                            .reset()
                            .setEffectiveTimeScale( 1 )
                            .setEffectiveWeight( 1 )
                            .fadeIn( 0.2 )
                            .play();
                        isStartAnimation = true;
                    }

                    const [x, y] = proj([25.960066553344987, -97.28865623474155]), z = 10;
                    let tween = new createjs.Tween.get(modelId.position)
                        .to({x:x,y:0,z:-y},3000);
                    tween.addEventListener('change', (eventObj => {
                        modelId.lookAt(x,0,-y);
                    }))
                    tween.addEventListener('complete',eventObj => {
                        actions['Walking'].fadeOut(0.2);
                        actions['Punch']
                            .reset()
                            .setEffectiveTimeScale( 1 )
                            .setEffectiveWeight( 1 )
                            .fadeIn( 0.2 )
                            .play();
                    })
                })
            });



        },
        onSatelliteMat: (mesh) => {
        },
    })


    btnUpload.addEventListener('change',handleUpload,false);
    function handleUpload(event) {
        if(event.target.files.length >0){
            let filename = event.target.files[0].name;
            let loader = new THREE.GLTFLoader();
            var mixer, clock;
            clock = new THREE.Clock();
            loader.load(`./models/${filename}`, function (gltfScene) {
                let dropZone = document.getElementById('dropZone');
                dropZone.style.display ='none';
                var mixer = new THREE.AnimationMixer( gltfScene.scene );
                mixer.clipAction(gltfScene.animations[0]).play();
                let gltfContainer = document.getElementById('gltf-content');
                let GLTFSCENE = new THREE.Scene();
                let GLTFRenderer = new THREE.WebGLRenderer({antialias:true});
                let GLTFCamera = new THREE.PerspectiveCamera(45, 450/250,0.1,100 );
                GLTFCamera.position.set( 0, 1.5,  1 );
                GLTFCamera.lookAt( new THREE.Vector3( 0, 2, 0 ) );
                GLTFSCENE.background = new THREE.Color( 0xa0a0a0 );
                GLTFSCENE.fog = new THREE.Fog( 0xa0a0a0, 10, 22 );
                GLTFSCENE.add(gltfScene.scene);
                gltfScene.scene.scale.set(0.1,0.1,0.1);
                var light = new THREE.HemisphereLight( 0xffffff, 0xffffff );
                light.position.set( 0, 20, 0 );
                GLTFSCENE.add( light );

                light = new THREE.DirectionalLight( 0xffffff );
                light.position.set( 0, 20, 10 );
                GLTFSCENE.add( light );

                GLTFRenderer.setSize( 450, 250 );
                gltfContainer.appendChild( GLTFRenderer.domElement );
                let controls = new THREE.OrbitControls( GLTFCamera, GLTFRenderer.domElement );
                controls.update();
                function GLTFRender() {
                    requestAnimationFrame( GLTFRender );
                    var dt = clock.getDelta();
                    if ( mixer ) mixer.update( dt );
                    controls.update();
                    GLTFRenderer.render( GLTFSCENE, GLTFCamera );
                }

                createGUI(gltfScene.scene, gltfScene.animations);
                function createGUI(model,animations) {
                    var previousAction, activeAction;
                    let api = { state: 'Walking' };
                    const datGUI = document.getElementById('dat-gui');
                    const GLTFGUI = new dat.GUI({ autoPlace: false, width: 150 });
                    datGUI.appendChild(GLTFGUI.domElement);
                    let AnimationFolder  = GLTFGUI.addFolder('Animations');

                    let actions = {};
                    for ( let i = 0; i < animations.length; i ++ ) {

                        let clip = animations[ i ];
                        let action = mixer.clipAction( clip );
                        actions[ clip.name ] = action;
                        createEmoteCallback( clip.name );
                        action.clampWhenFinished = true;

                    }


                    activeAction = actions['Walking'];
                    activeAction.play();

                    function createEmoteCallback(name) {
                        api[ name ] = function () {

                            fadeToAction( name, 0.2 );

                            //mixer.addEventListener( 'finished', restoreState );

                        };

                        AnimationFolder.add( api, name );

                    }
                    function fadeToAction( name, duration ) {

                        previousAction = activeAction;
                        activeAction = actions[ name ];

                        if ( previousAction !== activeAction ) {

                            previousAction.fadeOut( duration );

                        }

                        activeAction
                            .reset()
                            .setEffectiveTimeScale( 1 )
                            .setEffectiveWeight( 1 )
                            .fadeIn( duration )
                            .play();

                    }
                }
                GLTFRender();
            })


        }

    }

    btnImportToScene.addEventListener('click',handleImport,false);
    function handleImport(event) {
        let myModel = scene.getObjectByName('mymodel');
        myModel.visible = true;
    }
    map.on('click',function (e) {
        let popup = new mapboxgl.Popup({ offset: 25 }).setLngLat(e.lngLat);
        let btnGetCoordinate = document.createElement('button');
        btnGetCoordinate.type='button'
        btnGetCoordinate.innerText = "Get Point";
        btnGetCoordinate.onclick = function(){
            let xml = `<block type=vector3><field name="x">${e.lngLat.lat}</field>\n' +
                '                    <field name="y">${e.lngLat.lng}</field>\n' +
                '                    <field name="z">0</field></block>`;

            $('#toolbox').find("[name='Data']").append(xml);
            workspace.updateToolbox(document.getElementById("toolbox"));
        }

        let btnGenerateTerrain = document.createElement('button');
        btnGenerateTerrain.type='button'
        btnGenerateTerrain.innerText = "Generate Terrain";
        btnGenerateTerrain.onclick = function(event){
            let terrain = scene.getObjectByName('terrain');
            scene.remove(terrain);
            let newCoordinate =[e.lngLat.lat, e.lngLat.lng]
            tgeo.getTerrain(newCoordinate, radius, zoom, {
                onRgbDem: (meshes) => { // your implementation when terrain's geometry is obtained
                    let terrain = new THREE.Group();
                    terrain.name = 'terrain';
                    meshes.forEach((mesh) => {
                        terrain.add(mesh);
                        mesh.applyMatrix(new THREE.Matrix4().makeRotationX(THREE.Math.degToRad(-90)));
                    });
                    scene.add(terrain);

                },
                onSatelliteMat: (mesh) => {
                },
            })
        }
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.innerHTML = `Lat: ${e.lngLat.lat} <br> Lon: ${e.lngLat.lng} <br>`;
        let br = document.createElement('p')
        div.appendChild(span);
        div.appendChild(btnGetCoordinate);
        div.appendChild(br);
        div.appendChild(btnGenerateTerrain);
        popup.setDOMContent(div);
        popup.addTo(map);
    })

    const btnExportXR = document.getElementById('btnExportXR')
    const btnExportVR = document.getElementById('btnExportVR')
    btnExportXR.addEventListener('click',ev => {
        btnExportXR.setAttribute('download', 'webxr.html');
    })
    btnExportVR.addEventListener('click',ev => {
        btnExportVR.setAttribute('download', 'webvr.html');
    })

})


