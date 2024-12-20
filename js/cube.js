
// CUBE //
class Cube{
    constructor(options){
        
        this.container = document.createElement('div');
        //options.location.appendChild(this.container);

        this.container.style.width = options.size + 'px';
        this.container.style.height = options.size + 'px';
        this.container.style.perspective = options.perspective;

        this.cube = document.createElement('div');
        this.container.appendChild(this.cube);
        
        this.cube.style.width = '100%';
        this.cube.style.height = '100%';
        this.cube.style.position = 'relative';
        this.cube.style.transformStyle = 'preserve-3d';

        this.faces = {
            front : new CubeFace(this.cube, 0, 0, options.size, options.color, options.borderColor, options.borderSize),
            left : new CubeFace(this.cube, 0, -90, options.size, options.color, options.borderColor, options.borderSize),
            right : new CubeFace(this.cube, 0, 90, options.size, options.color, options.borderColor, options.borderSize),
            back : new CubeFace(this.cube, 0, 180, options.size, options.color, options.borderColor, options.borderSize),
            top : new CubeFace(this.cube, 90, 0, options.size, options.color, options.borderColor, options.borderSize),
            bottom : new CubeFace(this.cube, -90, 0, options.size, options.color, options.borderColor, options.borderSize),
        };

        this.rotateX = 0;
        this.rotateY = 0;
        this.rotateXSpeed = options.xSpeed;
        this.rotateYSpeed = options.ySpeed;
        this.originalXSpeed = options.xSpeed;
        this.originalYSpeed = options.ySpeed;
        this.changingXSpeed = false
        this.animating = options.animate;

        if(this.animating) this.animate();
    };

    stopAnimating(){
        this.animating = false;
    };

    animate(){
        const thisCube = this;
        this.animating = true;
        function animateCube() {
            if(thisCube.animating){
                thisCube.rotateX += thisCube.rotateXSpeed; // Adjust to control speed on X-axis
                thisCube.rotateY += thisCube.rotateYSpeed; // Adjust to control speed on Y-axis
                thisCube.cube.style.transform = `rotateX(${thisCube.rotateX}deg) rotateY(${thisCube.rotateY}deg)`;
            
                if(thisCube.rotateX >= 20 || thisCube.rotateX <= -20){
                    if(!thisCube.changingXSpeed){
                        thisCube.changingXSpeed = true;
                        animateValue({
                            from: thisCube.rotateXSpeed,
                            to: thisCube.rotateXSpeed * -1,
                            duration: 2000, // Animation duration in milliseconds (2 seconds)
                            easing: 'easeInOutQuad', // Easing function to use
                            callback: function (value) {
                                thisCube.rotateXSpeed = value;
                            },
                            onComplete: function () {
                                
                            },
                        });
                    };
                }else{
                    thisCube.changingXSpeed = false;
                };
            
                requestAnimationFrame(animateCube);
            };
        };

        animateCube();
    };

    speedUp(multi, inDuration, outDuration){
        if(this.animating){
            const thisCube = this;
            animateValue({
                from: thisCube.rotateYSpeed,
                to: thisCube.originalYSpeed * multi,
                duration: inDuration,
                easing: 'easeInQuad',
                callback: function(value){
                    thisCube.rotateYSpeed = value;
                },
                onComplete: function(){
                    animateValue({
                        from: thisCube.rotateYSpeed,
                        to: thisCube.originalYSpeed,
                        duration: outDuration,
                        easing: 'easeOutQuart',
                        callback: function(value){
                            thisCube.rotateYSpeed = value;
                        },
                        onComplete: function(){
                            
                        }
                    });
                },
            });
        };
    };
};


// CUBE FACE
class CubeFace{
    constructor(container, x, y, faceSize, color, borderColor, borderSize){
        this.face = document.createElement('div');
        container.appendChild(this.face);

        this.face.style.position = 'absolute';

        this.face.style.height = faceSize + 'px';
        this.face.style.width = faceSize + 'px';

        this.face.style.backgroundColor = color;
        this.face.style.border = borderSize + 'px solid ' + borderColor;
        this.face.style.boxSizing = 'border-box';

        this.face.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) translateZ(' + faceSize * 0.5 + 'px)';
    };
};