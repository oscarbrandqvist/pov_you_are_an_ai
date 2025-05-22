// BUTTON //

class Button{
    constructor(options){
        const thisButton = this;

        this.container = document.createElement('div');
        this.container.innerHTML = options.text;

        this.container.style.display = 'inline-block';
        this.container.style.border = 'solid ' + $ui.borderSize + ' ' + $ui.colors.blue;
        this.container.style.borderRadius = '10000px';
        this.container.style.background = $ui.colors.white;
        this.container.style.paddingLeft = this.container.style.paddingRight = '0.5em';
        this.container.style.cursor = 'pointer';
        this.container.style.fontSize = '1.5em';

        this.container.addEventListener('mouseenter', function(){
            thisButton.container.style.background = $ui.colors.blue;
            thisButton.container.style.color = $ui.colors.white;
        });
        this.container.addEventListener('mouseup', function(){
            thisButton.container.style.background = $ui.colors.blue;
            thisButton.container.style.color = $ui.colors.white;
        });
        this.container.addEventListener('touchstart', function(){
            thisButton.container.style.background = $ui.colors.blue;
            thisButton.container.style.color = $ui.colors.white;
        });
        //
        this.container.addEventListener('mouseleave', function(){
            thisButton.container.style.background = $ui.colors.white;
            thisButton.container.style.color = $ui.colors.blue;
        });
        this.container.addEventListener('mousedown', function(){
            thisButton.container.style.background = $ui.colors.white;
            thisButton.container.style.color = $ui.colors.blue;
        });
        this.container.addEventListener('touchend', function(){
            thisButton.container.style.background = $ui.colors.white;
            thisButton.container.style.color = $ui.colors.blue;
        });
        this.container.addEventListener('click', function(){
            thisButton.container.style.background = $ui.colors.white;
            thisButton.container.style.color = $ui.colors.blue;
            options.clickEvent();
        });
        
    };
};

// TITLE TEXT //
class TitleText{
    constructor(options){
        const thisTitleText = this;

        this.container = document.createElement('div');

        this.container.style.fontFamily = 'VCRFont, monospace';
        this.container.style.fontSize = options.fontSize;
        this.container.style.display = 'flex';
        this.container.style.overflow = 'hidden';
        this.container.style.flexWrap = 'wrap';
        this.container.style.justifyContent = 'flex-end';
        this.container.style.paddingTop = options.margin;

        this.container.style.color = options.color;
        this.container.style.textStrokeColor = options.color;
        this.container.style.textStrokeWidth = options.borderSize;
        this.container.style.webkitTextStrokeColor = options.color;
        this.container.style.webkitTextStrokeWidth = options.borderSize;

        if(options.subtitle != undefined){
            this.subtitle = document.createElement('div');
            this.container.appendChild(this.subtitle);
            
            this.subtitle.style.fontFamily = 'SourceCodePro, monospace';
            this.subtitle.style.position = 'absolute';
            this.subtitle.style.zIndex = '1';
            this.subtitle.style.fontSize = '0.2em';
            this.subtitle.style.fontWeight = '350';
            this.subtitle.style.background = options.secondColor;
            this.subtitle.style.left = '50%';
            this.subtitle.style.top = '50%';
            this.subtitle.style.paddingLeft = this.subtitle.style.paddingRight = '0.5em';
            this.subtitle.style.transform = 'translate(-50%, -77%)';

            this.subtitle.innerHTML = options.subtitle;
        };

        this.rawText = document.createElement('div');
        this.rawText.innerHTML = options.text;

        this.spans = [];

        for(let i = 0; i < this.rawText.textContent.length; i++){
            this.spans[i] = document.createElement('div');
            this.spans[i].textContent = this.rawText.textContent[i];
            this.spans[i].style.marginTop = '-' + options.margin;

            let progress = i / (this.rawText.textContent.length - 1)
            let speed = $easingFunctions.easeInQuart(Math.abs(progress - 0.5)) + 0.5;
            let random = Math.random() * 0.5 + 0.5;
            let delay = (((i + 1) * options.time) * speed) //* random;

            setTimeout(function(){
                thisTitleText.container.appendChild(thisTitleText.spans[i]);
                thisTitleText.spans[i].style.order = i
                
                thisTitleText.spans[i].style.transition = options.time * 1.5 + 'ms transform linear';
                //thisTitleText.spans[i].style.transform = 'translateY(50%)';
                setTimeout(function(){
                    thisTitleText.spans[i].style.transform = 'translateY(0%)';
                }, 50);

                setTimeout(function(){
                    thisTitleText.spans[i].style.color = options.secondColor;
                }, 400);

            }, delay);

            if(Math.random() < 0.3){
                this.spans[i].innerHTML = '[icon:./' + $iconMap[Math.floor(Math.random()*$iconMap.length)] + ']';
                replaceIcons(this.spans[i]);
                
                setTimeout(function(){
                    thisTitleText.spans[i].innerHTML = thisTitleText.rawText.textContent[i]; 
                }, delay + (Math.random() * 600));
            };

        };
    };
};

// IMAGE //

class Image{
    constructor(images, gallery, column, index){
        const thisImage = this;

        this.container = document.createElement('div');
        this.gallery = gallery;
        this.column = column;
        this.index = index;

        this.isHidden = images.hidden;
        this.puzzleType = images.puzzle;
        this.hasWatermark = images.watermarked;
        this.isGlazed = images.glazed;

        this.container.style.transform = 'translateY(200px)';

        this.imageHolder = document.createElement('div');
        this.container.appendChild(this.imageHolder);

        this.imageHolder.style.borderRadius = $ui.borderRadius;
        this.imageHolder.style.position = 'relative';
        this.imageHolder.style.border = 'solid ' + $ui.borderSize + ' ' + $ui.colors.blue;
        this.imageHolder.style.overflow = 'hidden';
        this.imageHolder.style.cursor = 'pointer';
        this.imageHolder.style.backgroundColor = $ui.colors.white;

        this.image = document.createElement('img');
        this.imageHolder.appendChild(this.image);
        
        if(this.isGlazed){
            this.image.src = images.glaze;
        }else{
            this.image.src = images.url;
        };

        this.image.style.maxWidth = '100%';
        this.image.style.display = 'block';
        this.image.style.objectFit = 'contain';
        this.image.style.pointerEvents = 'none';

        //code
        this.code = document.createElement('div');
        this.imageHolder.appendChild(this.code);
        this.code.style.position = 'absolute';
        this.code.style.pointerEvents = 'none';
        this.code.style.top = '0';
        this.code.style.right = '0';
        this.code.style.left = '0';
        this.code.style.bottom = '0';
        this.code.style.fontSize = '1.6em';
        this.code.style.textAlignLast = 'justify';
        this.code.style.padding = '10px';
        this.code.style.textTransform = 'uppercase';
        this.code.style.fontWeight = 'bold';

        this.code.innerHTML = images.code;


        //click here

        this.clickHere = document.createElement('div');
        this.imageHolder.appendChild(this.clickHere);
        this.clickHere.style.position = 'absolute';
        this.clickHere.style.pointerEvents = 'none';
        this.clickHere.style.top = 'calc(50% + 1em)';
        this.clickHere.style.right = '0';
        this.clickHere.style.left = '0';
        this.clickHere.style.bottom = '0';
        this.clickHere.style.fontSize = '1em';
        this.clickHere.style.textAlign = 'center';


        this.clickHere.innerHTML = 'tryck';


        this.watermark = document.createElement('div');
        this.imageHolder.appendChild(this.watermark);

        this.watermark.style.position = 'absolute';
        this.watermark.style.pointerEvents = 'none';
        this.watermark.style.top = '0';
        this.watermark.style.right = '0';
        this.watermark.style.left = '0';
        this.watermark.style.bottom = '0';
        this.watermark.style.backgroundImage = 'url(./assets/watermark.png)';
        this.watermark.style.backgroundRepeat = 'no-repeat';
        this.watermark.style.backgroundSize = 'auto 40%';
        this.watermark.style.backgroundPosition = 'center';
        this.watermark.style.opacity = '0';

        this.cover = document.createElement('div');
        this.imageHolder.appendChild(this.cover);


        this.cover.style.position = 'absolute';
        this.cover.style.height = '32px';
        this.cover.style.width = '32px';
        this.cover.style.left = 'calc(50% - 18px)';
        this.cover.style.top = 'calc(50% - 18px)';
        this.cover.style.backgroundImage = 'url(./assets/icons/image.png)';
        this.cover.style.imageRendering = 'pixelated';


        this.container.style.opacity = '0';
        this.container.style.transition = 'opacity 500ms, transform 500ms';

        setTimeout(function(){
            thisImage.container.style.opacity = '1';
            thisImage.container.style.transform = 'translateY(0)';
        }, 10); 

        if(this.isHidden){
            this.watermark.style.opacity = '0';
            this.image.style.opacity = '0';
            this.cover.style.opacity = '1';
            this.code.style.opacity = '1';
            this.clickHere.style.opacity = '1';
        }else{
            if(this.hasWatermark){
                this.watermark.style.opacity = '0.7';
            };
            this.image.style.opacity = '1';
            this.cover.style.opacity = '0';
            this.code.style.opacity = '0';
            this.clickHere.style.opacity = '0';
        };


        this.imageHolder.addEventListener('mouseenter', function(){
            thisImage.imageHolder.style.background = $ui.colors.blue;
            thisImage.code.style.color = thisImage.clickHere.style.color = $ui.colors.white;
        });
        this.imageHolder.addEventListener('mouseup', function(){
            thisImage.imageHolder.style.background = $ui.colors.blue;
            thisImage.code.style.color = thisImage.clickHere.style.color = $ui.colors.white;
        });
        this.imageHolder.addEventListener('touchstart', function(){
            thisImage.imageHolder.style.background = $ui.colors.blue;
            thisImage.code.style.color = thisImage.clickHere.style.color = $ui.colors.white;
        });
        //
        this.imageHolder.addEventListener('mouseleave', function(){
            thisImage.imageHolder.style.background = $ui.colors.white;
            thisImage.code.style.color = thisImage.clickHere.style.color = $ui.colors.blue;
        });
        this.imageHolder.addEventListener('mousedown', function(){
            thisImage.imageHolder.style.background = $ui.colors.white;
            thisImage.code.style.color = thisImage.clickHere.style.color = $ui.colors.blue;
        });
        this.imageHolder.addEventListener('touchend', function(){
            thisImage.imageHolder.style.background = $ui.colors.white;
            thisImage.code.style.color = thisImage.clickHere.style.color = $ui.colors.blue;
        });
        this.imageHolder.addEventListener('click', function(){
            thisImage.imageHolder.style.background = $ui.colors.white;
            thisImage.code.style.color = thisImage.clickHere.style.color = $ui.colors.blue;
            if(thisImage.image.style.opacity == '1'){
                thisImage.gallery.startPuzzle(thisImage, 'imageViewer');
            }else{
                thisImage.gallery.startPuzzle(thisImage, thisImage.puzzleType);
            };
        });
    };

    show(){
        this.image.style.opacity = '1';
        this.cover.style.opacity = '0';
        this.code.style.opacity = '0';
        this.clickHere.style.opacity = '0';
    };
};

//

class Gallery{
    constructor(options){
        const thisGallery = this;

        this.container = document.createElement('div');
        this.container.style.display = 'flex';
        this.container.style.alignItems = 'flex-start';

        this.container.style.overflowY = 'scroll';

        this.columns = [];
        this.images = options.images;
        this.loadedImages = 0;

        for(let i = 0; i < options.columns; i++){
            let thisColumn = document.createElement('div');
            this.container.appendChild(thisColumn);

            thisColumn.style.width = 100 / options.columns + '%';
            thisColumn.style.display = 'flex';
            thisColumn.style.flexDirection = 'column';

            this.columns.push(thisColumn);
        };


        let counter = 0;
        let timer = 100;
        function addStartImage(column){
            if(thisGallery.columns[column].offsetHeight <= thisGallery.container.offsetHeight){
                let image = thisGallery.addNextImage(thisGallery.columns[column]);
                image.image.onload = () => {
                    if(column == thisGallery.columns.length - 1){
                        addStartImage(0);
                    }else{
                        addStartImage(column + 1);
                    };
                };
            }else{
                    //if last
                    if(column == thisGallery.columns.length - 1){
                        //if all counter
                        if(counter == thisGallery.columns.length - 1){
                            return
                        }else{
                            counter = 0;
                            addStartImage(0);
                        };
                    }else{
                        counter++;
                        addStartImage(column + 1);
                    };

            };
        };

        addStartImage(0);


        const scrollFunc = function(){
            if(thisGallery.images.length > 0){
                for(let i = 0; i < thisGallery.columns.length; i++){
                    if(thisGallery.columns[i].getBoundingClientRect().bottom <= thisGallery.container.getBoundingClientRect().bottom){

                        thisGallery.container.removeEventListener('scroll', scrollFunc);

                        let image = thisGallery.addNextImage(thisGallery.columns[i]);

                        if(image){
                            image.image.onload = () => {
                                thisGallery.container.addEventListener('scroll', scrollFunc);
                            };
                        };

                    };
                };
            };
        };

        this.container.addEventListener('scroll', scrollFunc);

    };

    addNextImage(thisColumn){
        const thisGallery = this;

        if(this.images[this.loadedImages]){
            const image = new Image(this.images[this.loadedImages], thisGallery, thisColumn, this.loadedImages);

            image.container.style.padding = '20px';
            thisColumn.appendChild(image.container);

            this.loadedImages++;

            return image;
        };
    };

    startPuzzle(image, puzzleType){
        const puzzle = new Puzzle({
            thisImage : image,
            thisGallery : this,
            thisColumn : image.column,
            timer : 500,
            puzzleType : puzzleType,
        });
    };
};

class Puzzle{
    constructor(options){

        const thisPuzzle = this;

        thisPuzzle.container = document.createElement('div');
        options.thisGallery.container.appendChild(thisPuzzle.container);

        thisPuzzle.thisColumn = options.thisColumn;
        thisPuzzle.timer = options.timer;
        thisPuzzle.thisImage = options.thisImage;
        thisPuzzle.thisGallery = options.thisGallery;

        thisPuzzle.container.style.position = 'absolute';
        thisPuzzle.container.style.display = 'flex';
        thisPuzzle.container.style.overflow = 'hidden';
        thisPuzzle.container.style.alignItems = 'center';
        thisPuzzle.container.style.justifyContent = 'center';
        thisPuzzle.container.style.transition = 'left ' + options.timer + 'ms, right ' + options.timer + 'ms, top ' + options.timer + 'ms, bottom ' + options.timer + 'ms, opacity ' + options.timer + 'ms';
        thisPuzzle.thisColumn.style.transition = 'width ' + options.timer + 'ms';
        thisPuzzle.thisColumn.style.opacity = '0';

        thisPuzzle.containerSize = {
            left : options.thisImage.container.getBoundingClientRect().left - 1,
            right : options.thisGallery.container.getBoundingClientRect().right - options.thisImage.imageHolder.getBoundingClientRect().right - 2,
            top : Math.max(options.thisImage.container.getBoundingClientRect().top - 1, options.thisGallery.container.getBoundingClientRect().top - 22),
            bottom : options.thisGallery.container.getBoundingClientRect().bottom - options.thisImage.imageHolder.getBoundingClientRect().bottom - 4,
            columnWidth : options.thisColumn.style.width,
        };

        thisPuzzle.container.style.left = thisPuzzle.containerSize.left + 'px';
        thisPuzzle.container.style.right = thisPuzzle.containerSize.right + 'px';
        thisPuzzle.container.style.top = thisPuzzle.containerSize.top + 'px';
        thisPuzzle.container.style.bottom = thisPuzzle.containerSize.bottom + 'px';
        
        thisPuzzle.container.style.border = options.thisImage.imageHolder.style.border;
        thisPuzzle.container.style.borderRadius = options.thisImage.imageHolder.style.borderRadius;
        thisPuzzle.container.style.backgroundColor = $ui.colors.white;

        for(let i = 0; i < 10; i++){
            let flyingIcon = new FlyingIcon({
                speed : Math.random() * (0.1 - 0.05) + 0.05,
                radius : Math.floor(Math.random() * (700 - 300) + 300),
                icon : $iconMap[Math.floor(Math.random()*$iconMap.length)],
            });
            thisPuzzle.container.appendChild(flyingIcon.container);
        };

        thisPuzzle.exitButton = new Button({
            text : 'X',
            clickEvent : function(){
                thisPuzzle.close();
            },
        });
        thisPuzzle.exitButton.container.style.position = 'absolute';
        thisPuzzle.exitButton.container.style.top = '10px';
        thisPuzzle.exitButton.container.style.right = '10px';
        thisPuzzle.exitButton.container.style.padding = '0';
        thisPuzzle.exitButton.container.style.zIndex = '2';
        thisPuzzle.exitButton.container.style.fontWeight = 'bold';
        thisPuzzle.exitButton.container.style.textAlign = 'center';
        thisPuzzle.exitButton.container.style.lineHeight = '2.5em';
        thisPuzzle.exitButton.container.style.height = thisPuzzle.exitButton.container.style.width = '50px';

        thisPuzzle.container.appendChild(thisPuzzle.exitButton.container);
        thisPuzzle.container.appendChild(options.thisImage.cover);


        setTimeout(function(){
            thisPuzzle.container.style.left = '-2px';
            thisPuzzle.container.style.top = options.thisGallery.container.getBoundingClientRect().top - 22 + 'px';
            thisPuzzle.container.style.right = '-2px';
            thisPuzzle.container.style.bottom = '-2px';
            options.thisImage.column.style.width = '100%';
        },10);

        thisPuzzle.captcha;

        if(options.puzzleType == 'imageViewer'){
            thisPuzzle.showImage();
        };

        const correctEvent = function(){
            thisPuzzle.showImage();
            thisPuzzle.thisImage.image.style.opacity = '1';
            thisPuzzle.thisImage.cover.style.opacity = '0';
            thisPuzzle.thisImage.code.style.opacity = '0';
            thisPuzzle.thisImage.clickHere.style.opacity = '0';

            $images[thisPuzzle.thisImage.index].hidden = false;
        };

        //captcha

        if(options.puzzleType == 'randomImageCaptcha'){
            thisPuzzle.captcha = new ImageCaptcha({
                type : 'random',
                //
                //width : '350px',
                width : '550px',
                heightMult : 1.2,
                tilePadding : '4px',
                tileBorderRadius : '0vmin',
                rows : 3,
                columns : 4,
                chance : 0.5,
                overlayColor : $ui.colors.blue,
                batches : [
                    $imageCaptchaBatches.cat, 
                    $imageCaptchaBatches.dog,
                    $imageCaptchaBatches.rabbit,  
                ],
                correctEvent : function(){
                    thisPuzzle.captcha.container.remove();
                    correctEvent();
                },
                incorrectEvent : function(){
                    shakeContent(800);
                },
            });
        
            thisPuzzle.captcha.container.style.background = $ui.colors.white;
            thisPuzzle.captcha.container.style.border = 'solid calc(' + $ui.borderSize + ' * 4) ' + $ui.colors.blue;
            thisPuzzle.captcha.container.style.borderRadius = $ui.borderRadius;
            thisPuzzle.captcha.container.style.padding = thisPuzzle.captcha.container.style.paddingBottom = '0.5em';
        };

        // watermark

        if(options.puzzleType == 'watermark'){

            thisPuzzle.captcha = new WatermarkDialog({
                text : 'Please add a watermark to view this image:',
                submitText : 'Add Watermark',
                width : '350px',
                event : function(){
                    $images[thisPuzzle.thisImage.index].watermarked = true;
                    thisPuzzle.thisImage.hasWatermark = true;
                    thisPuzzle.thisImage.watermark.style.opacity = '0.7';
                    thisPuzzle.captcha.container.remove();
                    correctEvent();
                },
            });
        };

        if(options.puzzleType == 'glaze'){

            thisPuzzle.captcha = new WatermarkDialog({
                text : 'To view this image, please add "GLAZE" to the art:',
                submitText : 'Add GLAZE',
                width : '350px',
                event : function(){
                    $images[thisPuzzle.thisImage.index].glazed = true;
                    thisPuzzle.thisImage.isGlazed = true;
                    thisPuzzle.thisImage.image.src = $images[thisPuzzle.thisImage.index].glaze;
                    //thisPuzzle.thisImage.watermark.style.opacity = '0.7';
                    thisPuzzle.captcha.container.remove();
                    correctEvent();
                },
            });
        };

        function chanceCoverIcon(time,counter){
            if(counter < 10){
                setTimeout(function(){
                    counter++
                    thisPuzzle.thisImage.cover.style.backgroundImage = 'url(./' + $iconMap[Math.floor(Math.random()*$iconMap.length)] + ')';
                    chanceCoverIcon(time, counter);
                }, time);
            }else{
                thisPuzzle.thisImage.cover.style.backgroundImage = 'url(./assets/icons/image.png)';
            };
        };
        chanceCoverIcon(150, 0);

        setTimeout(function(){
            if(thisPuzzle.captcha){
                thisPuzzle.container.appendChild(thisPuzzle.captcha.container);
            };
        },1000)

    };

    showImage(){
        const thisPuzzle = this;

        this.imageHolder = document.createElement('div');
        this.container.appendChild(this.imageHolder);
        this.imageHolder.style.position = 'relative';
        this.imageHolder.style.width = '100%';
        this.imageHolder.style.height = '100%';
        this.imageHolder.style.justifyContent = 'center';
        this.imageHolder.style.alignItems = 'center';
        this.imageHolder.style.display = 'flex';

        this.image = document.createElement('img');
        this.imageHolder.appendChild(this.image);

        this.image.src = this.thisImage.image.src;
        this.image.style.maxWidth = '100%';
        this.image.style.maxHeight = '100%';
        this.image.style.objectFit = 'contain';
        this.image.style.zIndex = '1';
        this.image.style.pointerEvents = 'none';
        
        if(this.thisImage.hasWatermark){
            this.watermark = document.createElement('div');
            this.imageHolder.appendChild(this.watermark);
    
            this.watermark.style.position = 'absolute';
            this.watermark.style.pointerEvents = 'none';
            this.watermark.style.top = '0';
            this.watermark.style.right = '0';
            this.watermark.style.left = '0';
            this.watermark.style.bottom = '0';
            this.watermark.style.backgroundImage = 'url(./assets/watermark.png)';
            this.watermark.style.backgroundRepeat = 'no-repeat';
            this.watermark.style.backgroundSize = 'auto 40%';
            this.watermark.style.backgroundPosition = 'center';
            this.watermark.style.opacity = '0.7';
            this.watermark.style.zIndex = '2';
        };
    };

    close(){
        const thisPuzzle = this;

        thisPuzzle.container.style.left = thisPuzzle.containerSize.left + 'px';
        thisPuzzle.container.style.right = thisPuzzle.containerSize.right + 'px';
        thisPuzzle.container.style.top = thisPuzzle.containerSize.top + 'px';
        thisPuzzle.container.style.bottom = thisPuzzle.containerSize.bottom + 'px';
        thisPuzzle.thisColumn.style.transition = 'none';
        thisPuzzle.exitButton.container.remove();
        thisPuzzle.thisColumn.style.width = thisPuzzle.containerSize.columnWidth;
        thisPuzzle.thisColumn.style.opacity = '1';
        
        if(thisPuzzle.captcha){
            thisPuzzle.captcha.container.remove();
        };
        setTimeout(function(){
            thisPuzzle.thisImage.imageHolder.appendChild(thisPuzzle.thisImage.cover);
            thisPuzzle.container.remove();
        }, thisPuzzle.timer)
    };
};

class FlyingIcon{
    constructor(options){
        const thisIcon = this;
        thisIcon.speed = options.speed;
        thisIcon.container = document.createElement('div');
        thisIcon.container.style.width = '32px';
        thisIcon.container.style.height = '32px';
        thisIcon.container.style.backgroundImage = 'url(./' + options.icon +')';
        thisIcon.container.style.position = 'absolute';
        thisIcon.container.style.left = '0';
        thisIcon.container.style.top = '0';
        thisIcon.container.style.pointerEvents = 'none';

        let angle = Math.random() * 360;
        const circumference = 2 * Math.PI * options.radius;
        const arcLength = circumference / 360;
        const radius = options.radius;
        const centreX = window.innerWidth / 2;
        const centreY = window.innerHeight / 2;

        function animate() {

            angle += thisIcon.speed / arcLength;

            const x = centreX + radius * Math.cos(angle);
            const y = centreY + radius * Math.sin(angle);

            thisIcon.container.style.left = x + 'px';
            thisIcon.container.style.top = y + 'px';

            // Keep requesting new frames
            requestAnimationFrame(animate);
        };

        animate();
    };
};

// TITLE TABS

class TitleTab {
    constructor(text, icon, event){
        const thisTitleTab = this;

        thisTitleTab.event = event;
        this.container = document.createElement('div');
        this.container.innerHTML = text;
        //this.container.style.background = 'red';
        this.container.style.fontSize = '1.2em';
        this.container.style.padding = '0.15em';
        this.container.style.paddingLeft = this.container.style.paddingRight = '0.4em';
        this.container.style.cursor = 'pointer';

        this.container.style.transition = 'padding-left 150ms';

        this.iconHolder = document.createElement('div');
        this.iconHolder.style.position = 'absolute';
        this.iconHolder.style.height = '1.2em';
        this.iconHolder.style.width = '1.2em';
        this.iconHolder.style.marginLeft = '0.3em';
        this.iconHolder.style.display = 'inline-block';
        this.iconHolder.style.overflow = 'hidden';
        this.container.appendChild(this.iconHolder);


        this.icon = document.createElement('div');
        this.iconHolder.appendChild(this.icon);
        this.icon.style.height = '100%';
        this.icon.style.width = '100%';
        this.icon.style.backgroundImage = 'url(' + icon + ')';
        this.icon.style.backgroundSize = 'cover';
        this.icon.style.transition = 'transform 150ms';
        this.icon.style.transform = 'translateX(-1.2em)';


        //this.icon.style.backgroundSize = 'cover';


        const padding = '1em';

        this.hoverFunc = function(){
            thisTitleTab.icon.style.transform = 'translateX(0em)';
            thisTitleTab.container.style.paddingLeft = padding;
        };

        this.unhoverFunc = function(){
            thisTitleTab.icon.style.transform = 'translateX(-1.2em)';
            thisTitleTab.container.style.paddingLeft = '0.4em';
        };

        this.container.addEventListener('mouseenter', this.hoverFunc);
        //
        this.container.addEventListener('mouseleave', this.unhoverFunc);
        this.container.addEventListener('click', function(){
            thisTitleTab.event();
        });
    };

    activate(){

        this.container.removeEventListener('mouseleave', this.unhoverFunc);
        this.container.style.pointerEvents = 'none';
        this.container.style.fontWeight = '800';
        this.icon.style.transform = 'translateX(0em)';
        this.container.style.paddingLeft = '1em';
    };

    deactivate(){
        this.container.addEventListener('mouseleave', this.unhoverFunc);
        this.container.style.fontWeight = '400';
        this.container.style.pointerEvents = 'auto';
        this.icon.style.transform = 'translateX(-1.2em)';
        this.container.style.paddingLeft = '0.4em';
    };  
};