
// VALUE EASING //

const $easingFunctions = {
    linear: function (t) { return t; },
    easeInQuad: function (t) { return t * t; },
    easeInQuart : function (t) { return Math.pow(t, 4)},
    easeInExpo : function (t) {
        return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
    },

    easeOutQuad: function (t) { return t * (2 - t); },
    easeOutQuart : function (t) { return 1 - Math.pow(1 - t, 4);},
    easeOutExpo : function (t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },

    easeInOutQuad: function (t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInOutQuart: function (t) {
        return t < 0.5 ? 8 * Math.pow(t, 4) : 1 - Math.pow(-2 * t + 2, 4) / 2;
    },
    easeInOutExpo: function (t) {
        return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
    },
};

function animateValue(options) {
    const start = options.from;
    const end = options.to;
    const duration = options.duration;
    const easingFunction = typeof options.easing === 'function' ? options.easing : $easingFunctions[options.easing] || $easingFunctions.linear;
    const callback = options.callback;
    const onComplete = options.onComplete || function () { };
  
    let startTime = null;
  
    function animationStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      let progress = elapsed / duration;
      progress = Math.min(progress, 1); // Ensure progress does not exceed 1
  
      const easedProgress = easingFunction(progress);
      const currentValue = start + (end - start) * easedProgress;
  
      callback(currentValue);
  
      if (progress < 1) {
        requestAnimationFrame(animationStep);
      } else {
        // Ensure the final value is set and call onComplete
        callback(end);
        onComplete();
      }
    }
  
    requestAnimationFrame(animationStep);
};

// FLEX BREAK
function flexBreak(){
    const div = document.createElement('div');
    div.style.flexBasis = '100%';
    div.style.height = '0';
    div.style.width = '100%';
    return div;
};


//HEX TO RGB

function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');
    
    // Parse the three hex pairs
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    return 'rgb(' + r + ', ' +  g + ', ' + b + ')'; // Return an object with r, g, and b properties
}

// SHAKE //
function shakeContent(timer){
    function traverseDOM(node){
        const timedNode = node;

        document.body.style.pointerEvents = 'none';

        if(node.style.backgroundColor == hexToRgb($ui.colors.blue)){
            setTimeout(function(){
                timedNode.style.backgroundColor = $ui.colors.blue;
            }, timer);
            timedNode.style.backgroundColor = $ui.colors.red;
        };
        if(node.style.backgroundColor == hexToRgb($ui.colors.white)){
            setTimeout(function(){
                timedNode.style.backgroundColor = $ui.colors.white;
            }, timer);
            timedNode.style.backgroundColor = $ui.colors.red;
        };

        if(node.style.borderColor == hexToRgb($ui.colors.blue)){
            setTimeout(function(){
                timedNode.style.borderColor = $ui.colors.blue;
            }, timer);
            timedNode.style.borderColor = $ui.colors.white;
        };
        if(node.style.color == hexToRgb($ui.colors.blue)){
            setTimeout(function(){
                timedNode.style.color = $ui.colors.blue;
            }, timer);
            timedNode.style.color = $ui.colors.white;
        };
        if(node.style.textStrokeColor == $ui.colors.blue){
            setTimeout(function(){
                timedNode.style.textStrokeColor = $ui.colors.blue;
                timedNode.style.webkitTextStrokeColor = $ui.colors.blue;
            }, timer);
            timedNode.style.textStrokeColor = $ui.colors.white;
            timedNode.style.webkitTextStrokeColor = $ui.colors.white;
        };

        node = node.firstElementChild;


        while (node) {
            traverseDOM(node);
            node = node.nextElementSibling;
        };
    };
    traverseDOM(document.body);


    let shakeAmount = 5;
    let shakeSpeed = 50;

    animateValue({
        from: 5,
        to: 0,
        duration: timer,
        easing: 'easeOutQuad',
        callback: function(value){
            shakeAmount = value;
        },
        onComplete: function(){
            shakeAmount = 0;
        },
    });

    function shakeLeft(){
        if(shakeAmount > 0 ){
            $content.style.transform = 'translateX(-' + shakeAmount + 'vW)';
            setTimeout(function(){
                shakeRight();
            }, shakeSpeed);
        }else{
            $content.style.transform = 'translateX(0)';
        };
    };

    function shakeRight(){
        if(shakeAmount > 0 ){
            $content.style.transform = 'translateX(' + shakeAmount + 'vW)';
            setTimeout(function(){
                shakeLeft();
            }, shakeSpeed);
        }else{
            $content.style.transform = 'translateX(0)';
        };
    };

    shakeLeft();

    let incorrectSign = document.createElement('div');
    document.body.appendChild(incorrectSign);
    incorrectSign.innerHTML = '[icon:./assets/icons/msg_error.png] INCORRECT! [icon:./assets/icons/msg_error.png]';

    incorrectSign.style.position = 'fixed';
    incorrectSign.style.fontFamily = 'VCRFont, monospace';
    incorrectSign.style.color = $ui.colors.white;
    incorrectSign.style.background = $ui.colors.red;
    incorrectSign.style.width = '100%';
    incorrectSign.style.textAlign = 'center';
    incorrectSign.style.fontSize = '4em';
    incorrectSign.style.marginTop = 'calc(50vh - 1em)';
    incorrectSign.style.zIndex = '10000';

    setTimeout(function(){
        incorrectSign.remove();
        document.body.style.pointerEvents = 'auto';
    }, timer);

    replaceIcons(incorrectSign);

};


function replaceIcons(contentElement) {
    let text = contentElement.innerHTML;

    text = text.replace(/\[icon:([^\]]+)\]/g, (match, url) => {
        return `<span style=" image-rendering: pixelated; display : inline-block; width : 1em; height : 1em; background-image : url(${url}); background-size : contain; background-repeat : no-repeat; vertical-align : middle "></span>`
    });

    contentElement.innerHTML = text;
};