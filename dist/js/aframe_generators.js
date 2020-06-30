var HtmlGenerator = new Blockly.Generator("HTML");
HtmlGenerator.init = function (workspace) {
}
HtmlGenerator.finish = function (code) {
    return code;
};
HtmlGenerator.scrub_ = function (block, code) {
    let nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = HtmlGenerator.blockToCode(nextBlock);
    return code + nextCode;
};


HtmlGenerator['ar_scene'] = function (block) {
      let statement_content = HtmlGenerator.statementToCode(block,"content");
      let component = HtmlGenerator.valueToCode(block,'NAME', Blockly.JavaScript.ORDER_ATOMIC);
      return `<a-scene ${component} vr-mode-ui="enabled: false" arjs ="debugUIEnabled: false">\n${statement_content}\n<a-entity camera></a-entity>\n</a-scene>`;
};
HtmlGenerator['a-entity'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block,"content");
    return `<a-entity>\n${statement_content}\n</a-entity>\n`;
};
HtmlGenerator['nav_bar'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block,"content");
    let pos = block.getFieldValue("POSITION");
    return `\n<div class="${pos} mt-4">\n <ul class="nav nav-pills nav-justified">${statement_content}\n</ul>\n</div>\n`;
};

HtmlGenerator['marker'] = function (block) {
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let id = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    let value_name = HtmlGenerator.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    Blockly.JavaScript.addReservedWords('code');

    let statement_content = HtmlGenerator.statementToCode(block, "content");
    return `<a-marker project='visAR' id='${id}' ${value_name}>\n${statement_content}\n</a-marker>\n`;
};

HtmlGenerator['ar_preset'] = function (block) {
    let value = block.getFieldValue("preset");
    let code = ` preset = '${value}'`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['src_gltf'] = function (block) {
    let value = block.getFieldValue("src");
    let code = ` src = '${value}'`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

HtmlGenerator['ar_pattern'] = function (block) {
    let value = block.getFieldValue("pattern");
    let code = `type='pattern' url='${value}'`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['audio-list'] = function (block) {
    let value = block.getFieldValue("AUDIO");
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['text'] = function (block) {
    let value = `${block.getFieldValue("TEXT")}`;
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
}

HtmlGenerator['cube'] = function (block) {
    let pos = HtmlGenerator.valueToCode(block,'position_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let rot = HtmlGenerator.valueToCode(block,'rotation_vector3', Blockly.JavaScript.ORDER_ATOMIC);

    if(pos !=="") pos  = `position = '${pos}'`;
    if(rot !=="") rot  = `rotation = '${rot}'`;

    return `<a-box color="red" project='visAR' ${pos} ${rot}></a-box>`;
};

HtmlGenerator['a-box'] = function (block) {
    let c = block.getFieldValue("COLOUR");
    let d = block.getFieldValue("DEPTH");
    let h = block.getFieldValue("HEIGHT");
    let w = block.getFieldValue("WIDTH");

    return `<a-box color="${c}" depth="${d}" height="${h}" width="${w}"  project='visAR'></a-box>`;
};
HtmlGenerator['animation-mixer'] = function (block) {
    let pos = HtmlGenerator.valueToCode(block,'position_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let rot = HtmlGenerator.valueToCode(block,'rotation_vector3', Blockly.JavaScript.ORDER_ATOMIC);

    if(pos !=="") pos  = `position = '${pos}'`;
    if(rot !=="") rot  = `rotation = '${rot}'`;

    return `<a-box color="red" project='visAR' ${pos} ${rot}></a-box>`;
};

HtmlGenerator['gltf'] = function (block) {
    let pos = HtmlGenerator.valueToCode(block,'position_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let rot = HtmlGenerator.valueToCode(block,'rotation_vector3', Blockly.JavaScript.ORDER_ATOMIC);
    let src = HtmlGenerator.valueToCode(block, "SOURCE", Blockly.JavaScript.ORDER_ATOMIC);
    let ani = HtmlGenerator.valueToCode(block, "animation-mixer", Blockly.JavaScript.ORDER_ATOMIC);
    if(ani !=="") ani = `${ani}`;
    if(pos !=="") pos  = `position = '${pos}'`;
    if(rot !=="") rot  = `rotation = '${rot}'`;
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let id = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return `<a-gltf-model look-at="[camera]" id="${id}" project='visAR' ${pos} ${rot}${src}${ani}></a-gltf-model>`;
}

HtmlGenerator['variables_get'] = function(block){
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let id = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return [id, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['vector3'] = function (block) {
    let x = block.getFieldValue('x');
    let y = block.getFieldValue('y');
    let z = block.getFieldValue('z');
    return [`${x} ${y} ${z}`, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['loop'] = function (block) {
    let lval = block.getFieldValue('loops');
    return `loop: ${lval}`;
}
HtmlGenerator['animation-mixer'] = function (block) {
   let statement_content = HtmlGenerator.statementToCode(block, "NAME");
   let code = ` animation-mixer='${statement_content}'`;
   return [code, Blockly.JavaScript.ORDER_ATOMIC]
}

HtmlGenerator['position'] = function (block) {
    let value = HtmlGenerator.valueToCode(block,'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    let code =`position`;
    if(value !=="") code+= `=${value}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
}

HtmlGenerator['look-at'] = function (block) {

    let selector = HtmlGenerator.valueToCode(block,'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    let code =`look-at`;
    // if(vector3 !=="") code+= `="[${vector3}]"`;
    if(selector !=="") code+= `="#${selector}"`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
}
HtmlGenerator['rotation'] = function (block) {
    let value = HtmlGenerator.valueToCode(block,'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    let code =`rotation`;
    if(value !==null) code+= `=${value}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
}

HtmlGenerator['clip'] = function (block) {
    let lval = block.getFieldValue('clips');
   return `clip: ${lval};`;
}
//
HtmlGenerator['register_component'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block,"content");
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let component_name = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return `AFRAME.registerComponent('${component_name}', {\n${statement_content}\n});`;
};

HtmlGenerator['script'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block,"content");
    return `<script>\n${statement_content}\n</script>`;
};
HtmlGenerator['component_init'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block,"content");

    return `init: function(){\n${statement_content}\n}\n`
}
HtmlGenerator['component_init_function'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block,"content");
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let component_name = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return `$("#${component_name}").click(${statement_content});\n`
}

HtmlGenerator['component_tick'] = function (block) {
    return `tick: function(time, deltaTime){}\n`
}
HtmlGenerator['button'] = function (block) {
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let variable_name = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    let btnName = block.getFieldValue("NAME");

    return `\n<li class="nav-item"><button type="button" id='${variable_name}' class="btn btn-dark stage">${btnName}</button></li>\n`;
};

HtmlGenerator['behavior'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block, "NAME");
    return `function(){${statement_content}}`;
}
HtmlGenerator['print'] = function (block) {
    let value = block.getFieldValue('NAME');
    return `\n window.alert('${value}');\n`;
}
HtmlGenerator['move_object'] = function (block) {
    Blockly.JavaScript.init(Blockly.mainWorkspace)

    let offset =  HtmlGenerator.valueToCode(block, "OFFSET", Blockly.JavaScript.ORDER_ATOMIC);

    let var_object = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    let var_start = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('START'), Blockly.Variables.NAME_TYPE);
    let var_end = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('END'), Blockly.Variables.NAME_TYPE);
    let code =`\n let scene${var_object} = document.querySelector('a-scene');\n`;
    code += `\n var pos1${var_object} = document.querySelector('#${var_start}').object3D.position;\n`;
    code += `\n var pos2${var_object} = document.querySelector('#${var_end}').object3D.position;\n`;
    code += `\n let $obj${var_object} = document.querySelector('#${var_object}')\n`;
    code += `\n let x_${var_object} = parseFloat("${offset}".split(' ')[0]);\n`;
    code += `\n let y_${var_object} = parseFloat("${offset}".split(' ')[1]);\n`;
    code += `\n let z_${var_object} = parseFloat("${offset}".split(' ')[2]);\n`;
    code += `\n $obj${var_object}.parentNode.removeChild($obj${var_object})\n`;
    code += `\n scene${var_object}.appendChild($obj${var_object}.cloneNode());\n`;
    code += `\n $($obj${var_object}).attr("position",[pos1${var_object}.x, pos1${var_object}.y, pos1${var_object}.z].join(" "))\n`;
    code += `\n let curve${var_object} = document.createElement('a-curve');\n`;
    code += `\n $("#${var_start}${var_end}").remove(); \n`;
    code += `\n curve${var_object}.setAttribute('id', '${var_start}${var_end}');\n`;
    code += `\n let curvePoint1${var_object} = document.createElement('a-curve-point');\n`;
    code += `\n let curvePoint2${var_object} = document.createElement('a-curve-point');\n`;
    code += `\n curvePoint1${var_object}.setAttribute('position',[pos1${var_object}.x, pos1${var_object}.y, pos1${var_object}.z].join(" "));\n`;
    code += `\n curvePoint2${var_object}.setAttribute('position', [pos2${var_object}.x + x_${var_object}, pos2${var_object}.y+y_${var_object}, pos2${var_object}.z+z_${var_object}].join(" "));\n`;
    code += `\n curve${var_object}.appendChild(curvePoint1${var_object});\n`;
    code += `\n curve${var_object}.appendChild(curvePoint2${var_object});\n`;
    code += `\n scene${var_object}.appendChild(curve${var_object});\n`;
    code += `\n $("#${var_object}").attr("alongpath","curve: #${var_start}${var_end}; dur: 3000; rotate: true; delay: 2000")\n`;
    return code;
}

HtmlGenerator['set_object_animation'] = function (block) {
    Blockly.JavaScript.init(Blockly.mainWorkspace);
    let var_object = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    let var_animation = HtmlGenerator.valueToCode(block,'ANIMATION', Blockly.JavaScript.ORDER_ATOMIC);

    return `\n  $("#${var_object}").attr("animation-mixer",'clip: ${var_animation}');\n`;
}

HtmlGenerator['move_object_finish'] = function (block) {
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let var_object = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    let statement_content = HtmlGenerator.statementToCode(block, "content");
    return `$("#${var_object}").off("movingended","**")\n$("#${var_object}").on('movingended', function(){${statement_content}\n})`;
}

HtmlGenerator['trigger_behavior'] = function (block) {
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let var_object = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return `\n$("#${var_object}").trigger('click');\n`;
}

HtmlGenerator['play_audio'] = function (block) {
    let src = HtmlGenerator.valueToCode(block, "AUDIO", Blockly.JavaScript.ORDER_ATOMIC);
    let code = `\n let audio = new Audio("${src}");`;
    code += `\n audio.id="playIt${src}"; \n`;
    code += `\n document.body.appendChild(audio); \n`;
    code += `\n audio.play();`;
    return code;
}

HtmlGenerator['stop_audio'] = function (block) {
    return `\n $("audio").trigger("pause")`;
}
HtmlGenerator['animation'] = function (block) {
    let code = block.getFieldValue("ANIMATION")
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}
HtmlGenerator['wait_second'] = function (block) {
    let statement_content = HtmlGenerator.statementToCode(block, "content");

    let sec = block.getFieldValue("NAME")
    return `\n setTimeout(function(){${statement_content}},${sec*1000})`;
}
HtmlGenerator['display_message'] = function (block) {
    let message = HtmlGenerator.valueToCode(block, "MESSAGE", Blockly.JavaScript.ORDER_ATOMIC);
    let code =`\n$("div#message").remove();\n`;
    code += `\n$('<div id="message" class="fixed-bottom"><div class="text-center pl-5 pr-5 bg-info message">${message}</div></div>').appendTo('body');\n`
    return code;
}

// A-Frame Generator

HtmlGenerator['a-gltf-model'] = function (block) {

    let src = HtmlGenerator.valueToCode(block, "SOURCE", Blockly.JavaScript.ORDER_ATOMIC);
    Blockly.JavaScript.init(Blockly.mainWorkspace)
    let id = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return `<a-gltf-model look-at="[camera]" id="${id}" project='visAR' ${src}></a-gltf-model>`;
}