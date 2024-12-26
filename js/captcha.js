
// CAPTCHA //
class ImageCaptcha{
    constructor(options){
        const thisCaptcha = this;

        this.correctEvent = options.correctEvent;
        this.incorrectEvent = options.incorrectEvent;

        this.container = document.createElement('div');

        this.container.style.position = 'relative';
        this.container.style.width = options.width;
        this.container.style.display = 'flex';
        this.container.style.flexWrap = 'wrap';
        this.container.style.overflow = 'hidden';
        //this.container.style.paddingTop = '20px';

        this.instructions = document.createElement('div');
        this.container.appendChild(this.instructions);

        this.instructions.style.width = '100%';
        
        //this.instructions.style.textIndent = '2em';

        this.tileContainer = document.createElement('div');
        this.container.appendChild(this.tileContainer);

        this.tileContainer.style.width = '100%';
        this.tileContainer.style.height = 'calc(' + options.width + ' * ' + options.heightMult + ')';
        this.tileContainer.style.display = 'flex';
        this.tileContainer.style.flexWrap = 'wrap';
        this.tileContainer.style.gap = options.tilePadding;
        this.tileContainer.style.justifyContent = 'center';

        this.overlayColor = options.overlayColor;

        this.rows = options.rows;
        this.columns = options.columns;
        this.tilePadding = options.tilePadding;
        this.tileBorderRadius = options.tileBorderRadius;

        this.allBatchTiles = [];

        for(let b = 0; b < options.batches.length; b++){
            for(let i = 0; i < options.batches[b].size; i++){
                this.allBatchTiles.push([options.batches[b], options.batches[b].url + i + '.jpg']);
            };
        };

        // tiles

        this.tiles = [];

        if(options.type == 'random'){

            this.correctBatch = options.batches[Math.floor(Math.random() * options.batches.length)];

            this.instructions.innerHTML = 'Select all images of <br><span style="font-size : 2em; font-weight : 600">' + this.correctBatch.name + '</span>';

            replaceIcons(this.instructions);

            for(let x = 0; x < options.rows; x++){
                for(let y = 0; y < options.columns; y++){
                    const randomIndex = Math.floor(Math.random() * this.allBatchTiles.length)
                    const thisBatchTileIndex = this.allBatchTiles[randomIndex];

                    const isThisAnswer = thisBatchTileIndex[0] == this.correctBatch;

                    this.tiles.push(new CaptchaTile(this, thisBatchTileIndex[0], thisBatchTileIndex[1], isThisAnswer));
                    this.allBatchTiles.splice(randomIndex, 1);
                };
            };
        };

        // button
        this.button = new Button({
            text : 'Submit',
            clickEvent : function(){
                if(thisCaptcha.checkIfCorrect()){
                    thisCaptcha.correctEvent();
                }else{
                    thisCaptcha.incorrectEvent();
                };
            },
        });
        this.container.appendChild(this.button.container);
        this.button.container.style.margin = '10px';
        this.button.container.style.marginLeft = 'auto';



    };
    checkIfCorrect(){

        let allCorrectTiles = true;
        for(let i = 0; i < this.tiles.length; i++){
            if((this.tiles[i].isAnswer && !this.tiles[i].isActive) || (!this.tiles[i].isAnswer && this.tiles[i].isActive)){
                allCorrectTiles = false;
                i = this.tiles.length;
            };
        };

        return allCorrectTiles;
    };
};

class CaptchaTile{
    constructor(captcha, batch, url, isAnswer){
        this.tile = document.createElement('div');
        captcha.tileContainer.appendChild(this.tile);

        this.batch = batch;
        this.url = url;

        this.captcha = captcha;

        this.tile.style.background = 'url(' + url + '), ' + this.captcha.overlayColor;
        this.tile.style.backgroundSize = 'cover';

        this.tile.style.width = 'calc(' + 100 / this.captcha.rows + '% - ' + this.captcha.tilePadding + ')';
        this.tile.style.borderRadius = this.captcha.tileBorderRadius;
        this.tile.style.cursor = 'pointer';

        this.isActive = false;
        this.isAnswer = isAnswer;


        const thisTile = this;
        this.tile.addEventListener('click', function(){
            thisTile.check();
        });
        
    };

    check(){
        if(this.isActive){
            this.tile.style.backgroundBlendMode = 'normal';

            this.isActive = false;
        }else{
            this.tile.style.backgroundBlendMode = 'multiply';
            this.isActive = true;
        };

        //this.captcha.checkIfCorrect();


        //animation
        /*
        const thisTile = this;
        const polarity = Math.random() < 0.5 ? -1 : 1;
        thisTile.tile.style.transform = 'rotateZ(' + 5 * polarity + 'deg)';
        setTimeout(function(){
            thisTile.tile.style.transform = 'rotateZ(' + -5 * polarity + 'deg)';
            setTimeout(function(){
                thisTile.tile.style.transform = 'rotateZ(0deg)';
            }, 100);
        }, 100);
        */
    };
};

class WatermarkDialog{
    constructor(options){
        const thisDialog = this;

        this.event = options.event;

        this.container = document.createElement('div');
        this.container.style.background = $ui.colors.white;
        this.container.style.position = 'absolute';
        this.container.style.width = options.width;

        this.container.style.border = 'solid calc(' + $ui.borderSize + ' * 4) ' + $ui.colors.blue;
        this.container.style.borderRadius = $ui.borderRadius;
        //this.container.style.top = '100px';

        this.container.style.display = 'flex';
        //this.container.style.overflow = 'hidden';
        this.container.style.flexDirection = 'column';

        this.container.style.paddingLeft = this.container.style.paddingRight = '2em';
        this.container.style.paddingTop = this.container.style.paddingBottom = '1em';

        this.container.innerHTML = 'Please add a watermark to view this image:';
        this.button = new Button({
            text : 'Add Watermark',
            clickEvent : function(){
                thisDialog.event();
            },
        });
        this.container.appendChild(this.button.container);

        this.button.container.style.width = '100%';
        this.button.container.style.textAlign = 'center';
        this.button.container.style.padding = '0';
        this.button.container.style.marginTop = '1em';
    };
};