Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
        "type": "ar_scene",
        "message0": "AR SCENE component %1 %2",
        "args0": [
            {
                type: "input_value",
                name: "NAME",
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "marker",
        "message0": "marker %1 %2 %3",
        "args0": [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_value",
                name: "NAME",
                check: "attribute"
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type: "ar_preset",
        message0: "Preset %1",
        args0: [
            {
                type: "field_dropdown",
                name: "preset",
                options: [
                    ["hiro", 'hiro'],
                    ["kanji", 'kanji'],
                ]
            }
        ],
        output: "attribute",
        colour:140
    },
    {
        type:"audio-list",
        message0:"Audio list %1",
        args0: [
            {
                type: "field_dropdown",
                name: "AUDIO",
                options: [
                    ["stage1", 'assets/audio/message01.mp3'],
                    ["stage2", 'assets/audio/message02.mp3'],
                    ["stage3", 'assets/audio/message03.mp3'],
                    ["stage4", 'assets/audio/message04.mp3'],
                    ["stage5", 'assets/audio/message05.mp3'],
                    ["stage6", 'assets/audio/message06.mp3'],
                    ["stage7", 'assets/audio/message07.mp3'],
                    ["stage8", 'assets/audio/message08.mp3'],
                    ["attack", 'assets/audio/Sword.mp3'],
                    ["Cannon", 'assets/audio/Cannon.mp3'],
                    ["Gunfight", 'assets/audio/gunfight2.mp3'],
                ]
            }
        ],
        output: "attribute",
        colour:140
    },
    {
        type: "animation",
        message0: "Animation list %1",
        args0: [
            {
                type: "field_dropdown",
                name: "ANIMATION",
                options: [
                    ["Dance", 'Dance'],
                    ["Dealth", 'Dealth'],
                    ["Idle", 'Idle'],
                    ["Jump", 'Jump'],
                    ["No", 'No'],
                    ["Punch", 'Punch'],
                    ["Running", 'Running'],
                    ["Sitting", 'Sitting'],
                    ["Thumbs...", 'Thumbs'],
                    ["Walking", 'Walking'],
                    ["WalkJump", 'WalkJump'],
                    ["Wave", 'Wave'],
                    ["Yes", 'Yes']
                ]
            }
        ],
        output: "null",
        colour:140
    },
    {
        type: "src_gltf",
        message0: "GLTF Model %1",
        args0: [
            {
                type: "field_dropdown",
                name: "src",
                options: [
                    ["CesiumMan", 'assets/models/CesiumMan.gltf'],
                    ["RobotExpressive", 'assets/models/scene.gltf'],
                    ["Union Troop", 'assets/models/FinalUnion.glb'],
                    ["Confederate", 'assets/models/confTroop.glb'],
                ]
            }
        ],
        output: "attribute",
        colour:140
    },
    {
        type: "ar_pattern",
        message0: "Pattern %1",
        args0: [
            {
                type: "field_dropdown",
                name: "pattern",
                options: [
                    [{src: "assets/markers/letterA.png", width: 30, height: 30}, 'assets/patterns/letterA.patt'],
                    [{src: "assets/markers/letterB.png", width: 30, height: 30}, 'assets/patterns/letterB.patt'],
                    [{src: "assets/markers/letterC.png", width: 30, height: 30}, 'assets/patterns/letterC.patt'],
                    [{src: "assets/markers/letterD.png", width: 30, height: 30}, 'assets/patterns/letterD.patt'],
                    [{src: "assets/markers/letterG.png", width: 30, height: 30}, 'assets/patterns/letterG.patt'],
                    [{src: "assets/markers/letterF.png", width: 30, height: 30}, 'assets/patterns/letterF.patt'],
                    [{src: "assets/markers/pattern-pos1.png", width: 30, height: 30}, 'assets/patterns/pattern-pos1.patt'],
                    [{src: "assets/markers/pattern-pos2.png", width: 30, height: 30}, 'assets/patterns/pattern-pos2.patt'],
                    [{src: "assets/markers/pattern-pos3.png", width: 30, height: 30}, 'assets/patterns/pattern-pos3.patt'],
                    [{src: "assets/markers/pattern-pos4.png", width: 30, height: 30}, 'assets/patterns/pattern-pos4.patt'],
                    [{src: "assets/markers/pattern-pos5.png", width: 30, height: 30}, 'assets/patterns/pattern-pos5.patt'],
                    [{src: "assets/markers/pattern-pos6.png", width: 30, height: 30}, 'assets/patterns/pattern-pos6.patt'],

                ]
            }
        ],
        output: "attribute",
        colour:140
    },
    {
        type: "vector3",
        message0: "lat: %1 lon: %2 ele: %3",
        args0: [
            {
                type: "field_number",
                name: "x",
                value: 0
            },
            {
                type: "field_number",
                name: "y",
                value: 0
            },
            {
                type: "field_number",
                name: "z",
                value: 0
            }
        ],
        output: null,
        colour:140
    },
    {
        type: "cube",
        message0: "Cube position %1 rotation %2",
        args0: [
            {
                type: "input_value",
                name: "position_vector3",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "rotation_vector3",
                align: "RIGHT"
            }
        ],
        previousStatement: null,
        nextStatement: "null",
        colour: 65
    },
    {
        type: "gltf",
        message0: "GLTF id %1 position %2 rotation %3 source %4 animation %5",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_value",
                name: "position_vector3",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "rotation_vector3",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "SOURCE",
                check: "attribute",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "animation-mixer",
                check: "attribute",
                align: "RIGHT"
            },
        ],
        previousStatement: null,
        nextStatement: "null",
        colour: 65
    },
    {
        type: "animation-mixer",
        message0: "Animation %1 %2",
        args0: [
            {
                type: "input_dummy"
            }, {
                type: "input_statement",
                name: "NAME"
            }
        ],
        output: "attribute",
        colour: 90
    },
    {
        type: "clip",
        message0: "Clip %1",
        args0: [
            {
                type: "field_dropdown",
                name: "clips",
                options: [
                    ["animation_0", 'animation_0'],
                    ["Idle", 'Idle'],
                    ["Attack", 'Attack'],
                    ["Walking", 'Walking'],
                    ["Running", 'Running'],
                    ["Resting", 'Resting'],
                ]
            }
        ],
        previousStatement: "null",
        nextStatement: "null"
    },
    {
        type: "loop",
        message0: "Loop %1",
        args0: [
            {
                type: "field_dropdown",
                name: "loops",
                options: [
                    ["Once", 'once'],
                    ["repeat", 'repeat'],
                    ["pingpong", 'pingpong']
                ]
            }
        ],
        previousStatement: "null",
        nextStatement: "null"
    },
    {
        "type": "nav_bar",
        "message0": "Nav-bar position %1 %2",
        "args0": [
            {
                type: "field_dropdown",
                name: "POSITION",
                options: [
                    ["top", 'fixed-top'],
                    ["bottom", 'fixed-bottom']

                ]
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        "colour": 355,
        previousStatement:"null",
        nextStatement: "null",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "register_component",
        "message0": "Register Component %1 %2",
        "args0": [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        previousStatement: "null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "script",
        "message0": "Script %1 %2",
        "args0": [
            {
                type: "input_dummy"
            },
            {
                type: "input_statement",
                name: "content"
            }
        ],
        previousStatement: "null",
        nextStatement: "null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"component_init",
        message0:"Init %1",
        args0:[
            {
                type:"input_statement",
                name:"content"
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 300
    },
    {
        type:"component_init_function",
        message0:"When Play is clicked Do %1",
        args0:[
            {
                type:"input_value",
                name:"content"
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 300
    },
    {
        type:"component_tick",
        message0:"Ticks %1",
        args0:[
            {
                type:"input_statement",
                name:"content"
            }
        ],
        previousStatement: "null",
        nextStatement:"null"
    },
    {
        type:"button",
        message0:"Button ID %1 NAME %2",
        args0:[
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type:"field_input",
                name:"NAME",
                text: "Button 1",
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type: "behavior",
        message0: "Action List %1 %2",
        args0: [
            {
                type: "input_dummy"
            }, {
                type: "input_statement",
                name: "NAME"
            }
        ],
        output: "null",
        colour: 220
    },
    {
        type: "print",
        message0: "Alert %1 %2",
        args0: [
            {
                type: "input_dummy"
            },
            {
                type:"field_input",
                name:"NAME",
                text: "Hello world",
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "display_message",
        message0: "Display message %1",
        args0: [
            {
                type:"input_value",
                name:"MESSAGE",
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 220
    },
    {
        type: "move_object",
        message0: "Move Object %1 from %2 to %3",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {    // Beginning of the field variable dropdown
                "type": "input_value",
                "name": "START",    // Static name of the field

            },
            {    // Beginning of the field variable dropdown
                "type": "input_value",
                "name": "END",    // Static name of the field

            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "set_object_animation",
        message0: "Set animation of %1 to %2",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {    // Beginning of the field variable dropdown
                "type": "input_value",
                "name": "ANIMATION",    // Static name of the field
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "move_object_finish",
        message0: "When Object %1 finish moving do %2",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {    // Beginning of the field variable dropdown
                "type": "input_statement",
                "name": "content",    // Static name of the field
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 300
    },
    {
        type: "trigger_behavior",
        message0: "Trigger next behavior %1",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 90
    },
    {
        type: "play_audio",
        message0: "Play Audio %1",
        args0: [
            {
                type: "input_value",
                name: "AUDIO"
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 220
    },

    {
        type: "stop_audio",
        message0: "Stop Audio",
        previousStatement: "null",
        nextStatement:"null",
        colour: 220
    },
    {
        type: "wait_second",
        message0: "Wait %1 seconds THEN %2",
        args0: [
            {    // Beginning of the field variable dropdown
                "type": "field_number",
                "name": "NAME",    // Static name of the field
            },
            {    // Beginning of the field variable dropdown
                "type": "input_statement",
                "name": "content",    // Static name of the field
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        colour: 300
    },

    // A-Frame core
    {
        type:"a-entity",
        message0:"Entity component %1 content %2",
        args0:[
            {
                type:"input_statement",
                name:"ATTRIBUTES",
                align: "RIGHT"
            },
            {
                type:"input_statement",
                name:"content",
                align: "RIGHT"
            }
        ],
        previousStatement: "null",
        nextStatement:"null",
        "colour": 355,
        "tooltip": "",
        "helpUrl": ""

    },
    // A-Frame components
    {
        type:"position",
        message0:"position %1",
        args0:[
            {
                type:"input_value",
                name:"VALUE"
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"rotation",
        message0:"rotation %1",
        args0:[
            {
                type:"input_value",
                name:"VALUE"
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"scale",
        message0:"scale %1",
        args0:[
            {
                type:"input_value",
                name:"VALUE"
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"camera",
        message0:"camera  active %1 far %2 fov %3 near %4 spectator %5 zoom %6",
        args0:[
            {
                "type": "field_checkbox",
                "name": "ACTIVE",
                "checked": true
            },
            {
                "type": "field_number",
                "name": "FAR",
                "value": 1000,
                "min": 0,
                "max": 10000,
                "precision": 10
            },
            {
                "type": "field_angle",
                "name": "FOV",
                "angle": 80
            },
            {
                "type": "field_number",
                "name": "NEAR",
                "value": 0.005,
                "min": 0,
                "max": 1,
            },
            {
                "type": "field_checkbox",
                "name": "SPECTATOR",
                "checked": false
            },
            {
                "type": "field_number",
                "name": "ZOOM",
                "value": 1,
                "min": 1,
                "max": 10,
                "precision": 1
            },
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"background",
        message0:"background color %1 transparent %2",
        args0:[
            {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ffffff"
            },
            {
                "type": "field_checkbox",
                "name": "TRANSPARENT",
                "checked": false
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"light",
        message0:"light type %1 color %2 intensity %3",
        args0:[
            {
                type: "field_dropdown",
                name: "LIGHT",
                options: [
                    ["ambient", 'ambient'],
                    ["directional", 'directional'],
                    ["hemisphere", 'hemisphere'],
                    ["point", 'point'],
                    ["spot", 'spot'],

                ]
            },
            {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ffffff"
            },
            {
                "type": "field_number",
                "name": "INTENSITY",
                "value": 1,
                "min": 1,
                "max": 10,
                "precision": 1
            },
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"geometry",
        message0:"geometry buffer %1 primitive %2 skipCache %3",
        args0:[
            {
                "type": "field_checkbox",
                "name": "BUFFER",
                "checked": true
            },
            {
                "type": "field_input",
                "name": "PRIMITIVE",
                "text": "box",
                "spellcheck": false
            },
            {
                "type": "field_checkbox",
                "name": "SKIPCACHE",
                "checked": false
            },
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"look-controls",
        message0:"look-controls enabled %1 hmdEnabled %2 reverseMouseDrag %3 reverseTouchDrag %4 touchEnabled %5 pointerLockEnabled %6",
        args0:[
            {
                "type": "field_checkbox",
                "name": "ENABLED",
                "checked": true,
                align: "RIGHT"
            },
            {
                "type": "field_checkbox",
                "name": "HMDENABLED",
                "checked": true,
                align: "RIGHT"
            },
            {
                "type": "field_checkbox",
                "name": "REVERSEMOUSEDRAG",
                "checked": false,
                align: "RIGHT"
            },
            {
                "type": "field_checkbox",
                "name": "REVERSETOUCHEDRAG",
                "checked": false,
                align: "RIGHT"
            },
            {
                "type": "field_checkbox",
                "name": "TOUCHENABLED",
                "checked": true,
                align: "RIGHT"
            },
            {
                "type": "field_checkbox",
                "name": "POINTERLOCKENABLED",
                "checked": false,
                align: "RIGHT"
            },
        ],

        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"material",
        message0:"material colour %1 wireframe %2 transparent %3 visible %4",
        args0:[
            {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#fff"
            },
            {
                "type": "field_checkbox",
                "name": "WIREFRAME",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "TRANSPARENT",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "VISIBLE",
                "checked": true
            },
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"visible",
        message0:"visible %1",
        args0:[

            {
                "type": "field_checkbox",
                "name": "VISIBLE",
                "checked": true
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"look-at",
        message0:"look-at selector %1",
        args0:[
            {
                type:"input_value",
                name:"VALUE",
                align: "RIGHT"
            }
        ],
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 265,
        "tooltip": "The look-at component defines the behavior for an entity to dynamically rotate or face towards another entity or position",
        "helpUrl": ""

    },

    // A-Frame primitives

    {
        type:"a-box",
        message0:"Cube color %1 depth %2 height %3 width %4 component %5",
        args0:[
            {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#fff"
            },
            {
                "type": "field_number",
                "name": "DEPTH",
                "value": 1,
                "min": 0,
                "max": 100,
                "precision": 0.01
            },
            {
                "type": "field_number",
                "name": "HEIGHT",
                "value": 1,
                "min": 0,
                "max": 100,
                "precision": 0.01
            },
            {
                "type": "field_number",
                "name": "WIDTH",
                "value": 1,
                "min": 0,
                "max": 100,
                "precision": 0.01
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"a-gltf-model",
        message0:"GLTF Model id %1 src %2 attr %3",
        args0:[
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_value",
                name: "SOURCE",
                check: "attribute",
                align: "RIGHT"
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"a-obj-model",
        message0:"OBJ id %1 src %2 mtl %3 component %4",
        args0:[
            {    // Beginning of the field variable dropdown
                "type": "field_variable",
                "name": "VAR",    // Static name of the field
                "variable": "item"    // Given at runtime
            },
            {
                type: "input_value",
                name: "SOURCE",
                check: "attribute",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "MTL",
                check: "attribute",
                align: "RIGHT"
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"a-sky",
        message0:"SKY src %1 color %2 component %3",
        args0:[
            {
                type: "input_value",
                name: "SOURCE",
                check: "attribute",
                align: "RIGHT"
            },
            {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ff0000"
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"a-camera",
        message0:"CAMERA far %1 fov %2 near %3 component %4",
        args0:[
            {
                "type": "field_number",
                "name": "FAR",
                "value": 1000,
                "min": 0,
                "max": 10000,
                "precision": 10
            },
            {
                "type": "field_angle",
                "name": "FOV",
                "angle": 80
            },
            {
                "type": "field_number",
                "name": "NEAR",
                "value": 0.005,
                "min": 0,
                "max": 1,
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"a-cursor",
        message0:"CURSOR far %1 fuse %2 fuse-timeout %3 inteval %4 object %5 component %6",
        args0:[
            {
                "type": "field_number",
                "name": "FAR",
                "value": 1000,
                "min": 0,
                "max": 10000,
                "precision": 10
            },
            {
                "type": "field_checkbox",
                "name": "FUSE",
                "checked": false,
                align: "RIGHT"
            },
            {
                "type": "field_number",
                "name": "FUSE-TIMEOUT",
                "value": 1500,
                "min": 0,
                "max": 10000,
            },
            {
                "type": "field_number",
                "name": "INTERVAL",
                "value": 100,
                "min": 0,
                "max": 10000,
            },
            {
                "type": "field_number",
                "name": "OBJECTS",
                "value": 100,
                "min": 0,
                "max": 10000,
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"a-circle",
        message0:"RING color %1 src %2 radius %3 component %4",
        args0:[
            {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#fff"
            },
            {
                type: "input_value",
                name: "SOURCE",
                align: "RIGHT"
            },
            {
                "type": "field_number",
                "name": "RADIUS",
                "value": 50,
                "min": 0,
                "max": 100,
                "precision": 0.01
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        type:"a-cone",
        message0:"CONE color %1 src %2 radius-bottom %3 radius-top %4 component %5",
        args0:[
            {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#fff"
            },
            {
                type: "input_value",
                name: "SOURCE",
                align: "RIGHT"
            },
            {
                "type": "field_number",
                "name": "RADIUS-BOTTOM",
                "value": 2,
                "min": 0,
                "max": 100,
                "precision": 0.01
            },
            {
                "type": "field_number",
                "name": "RADIUS-TOP",
                "value": 0.5,
                "min": 0,
                "max": 100,
                "precision": 0.01
            },
            {
                "type": "input_statement",
                "name": "COMPONENT",
                "align":"RIGHT",

            },
        ],
        "inputsInline": true,
        "previousStatement": "null",
        "nextStatement": "null",
        "colour": 60,
        "tooltip": "",
        "helpUrl": ""
    },

    //Properties


]);
