
    // TEXT SCROLLER //
class TextScroller{
    constructor(options){
        const thisTextScroller = this;

        this.container = document.createElement('div');

        this.container.style.textWrap = 'nowrap';

        this.container.style.overflow = 'hidden';
        this.container.style.backgroundColor = $ui.colors.blue;
        this.container.style.color = $ui.colors.white;
        this.container.style.fontSize = options.fontSize;
        this.container.style.padding = options.padding;
        this.container.style.display = 'flex'
        //this.container.style.borderRadius = '1000px'

        this.text = [];
        this.text[0] = document.createElement('div');
        this.container.appendChild(this.text[0]);
        this.text[0].innerHTML = options.text;

        this.text[1] = document.createElement('div');
        this.container.appendChild(this.text[1]);
        this.text[1].innerHTML = options.text;


        let position = 0;
        this.speed = options.speed;
  
        function scrollText() {
            position -= thisTextScroller.speed;
            if (position < -thisTextScroller.text[0].offsetWidth) {
                position = 0;
            };
            
            thisTextScroller.text[0].style.transform = thisTextScroller.text[1].style.transform = `translateX(${position}px)`;
            requestAnimationFrame(scrollText);
        };

        scrollText();

    };
};