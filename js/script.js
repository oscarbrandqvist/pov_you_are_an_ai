//preload images

for(let i = 0; i < $imageCaptchaBatches.cat.size; i++){
    let previewImage = document.createElement('div');
    document.body.appendChild(previewImage);
    previewImage.style.background = 'url(./assets/random_captcha_images/cat/' + i + '.jpg)';
    previewImage.style.height = '20px';
    previewImage.style.width = '20px';
    previewImage.style.top = '-200px';
    previewImage.style.position = 'absolute';
}

for(let i = 0; i < $imageCaptchaBatches.dog.size; i++){
    let previewImage = document.createElement('div');
    document.body.appendChild(previewImage);
    previewImage.style.background = 'url(./assets/random_captcha_images/dog/' + i + '.jpg)';
    previewImage.style.height = '20px';
    previewImage.style.width = '20px';
    previewImage.style.top = '-200px';
    previewImage.style.position = 'absolute';
}

for(let i = 0; i < $imageCaptchaBatches.rabbit.size; i++){
    let previewImage = document.createElement('div');
    document.body.appendChild(previewImage);
    previewImage.style.background = 'url(./assets/random_captcha_images/rabbit/' + i + '.jpg)';
    previewImage.style.height = '20px';
    previewImage.style.width = '20px';
    previewImage.style.top = '-200px';
    previewImage.style.position = 'absolute';
}

// BASE ELEMENTS //
document.body.style.backgroundColor = $ui.colors.white;
document.body.style.fontFamily = 'SourceCodePro, monospace';
document.body.style.color = $ui.colors.blue;
document.body.style.fontSize = '14px';
document.body.style.fontWeight = '500';
document.body.style.margin = '0';



    // Content Div //
const $content = document.createElement('div');
document.body.appendChild($content);

$content.style.position = 'absolute';
$content.style.height = 'calc(100% - 4vmin)';

$content.style.top = $content.style.right = $content.style.bottom = $content.style.left = '2vmin';

$content.style.border = 'solid ' + $ui.borderSize + ' ' + $ui.colors.blue;
$content.style.borderRadius = $ui.borderRadius;

$content.style.display = 'flex';
$content.style.flexDirection = 'column';
$content.style.alignItems = 'flex-start';

$content.style.overflow = 'hidden';


    // Text Scroller //
const $textScrollerHolder = document.createElement('div');
$content.appendChild($textScrollerHolder);

const $textScroller = new TextScroller({
    //text : "In an age dominated by digital landscapes, the boundary between art and technology grows increasingly blurred. Modern creators face unprecedented challenges, as artificial intelligence harvests vast amounts of data to mimic and reproduce artistic styles without consent. The very act of protecting one’s work has become an intricate maze of barriers—watermarks, Captchas, and tools designed to safeguard creativity from unauthorised replication. - ",
    text : "Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? Är du en AI? ",
    //text : 'Lorem ipsum dolor sit amet, consectetur [icon:./assets/icons/directory_explorer.png] adipiscing elit. Praesent porta purus ac ante dignissim, eu euismod lorem eleifend. Vivamus id venenatis diam. Suspendisse interdum tempus sapien, nec feugiat magna fermentum at. ',
    fontSize : '1em',
    padding : '0.2em',
    speed : 2,
});
$textScrollerHolder.appendChild($textScroller.container);

$textScroller.container.style.marginTop = '3vmin';

  // Run the function on page load
replaceIcons($textScroller.text[0]);
replaceIcons($textScroller.text[1]);


    // Title //
const $titleHolder = document.createElement('div');
$content.appendChild($titleHolder);
$titleHolder.style.display = 'flex';
$titleHolder.style.width = '100%';

    // FILLER
const $titleFiller = document.createElement('div');
$titleHolder.appendChild($titleFiller);
$titleFiller.style.flexGrow = '1';
$titleFiller.style.display = 'flex';
$titleFiller.style.flexDirection = 'column';
$titleFiller.style.alignItems = 'flex-start';
$titleFiller.style.justifyContent = 'center';

const $titleTabPortfolio = new TitleTab('Galleri', './assets/icons/directory_open_images.png', buildPortfolio);
$titleFiller.appendChild($titleTabPortfolio.container);

const $titleTabAboutUs = new TitleTab('Om_oss', './assets/icons/users.png', buildAboutUs);
$titleFiller.appendChild($titleTabAboutUs.container);

const $titleTabContact = new TitleTab('Kontact', './assets/icons/envelope_open.png', buildContact);
//$titleFiller.appendChild($titleTabContact.container);


let $title = new TitleText({
    text : '',
    fontSize : '7em',
    margin : '0.4em',
    color : $ui.colors.blue,
    secondColor : $ui.colors.white,
    borderSize : $ui.borderSize, 
    time : 100,
})

let $galleryHolder = document.createElement('div');

// PORTFOLIO

function buildPortfolio(){

    $titleTabPortfolio.activate();
    $titleTabAboutUs.deactivate();
    $titleTabContact.deactivate();

    $title.container.remove();
    $title = new TitleText({
        text : 'Galleri',
        fontSize : '7em',
        margin : '0.4em',
        color : $ui.colors.blue,
        secondColor : $ui.colors.white,
        borderSize : $ui.borderSize, 
        time : 100,
        subtitle : 'POV, DU ÄR EN AI',
    });

    $titleHolder.appendChild($title.container);

    $title.container.style.right = '-1.5vmin';
    $title.container.style.position = 'relative';
    $title.container.style.paddingLeft = '5px';
    $title.container.style.maxWidth = '70%';
    $title.container.style.marginTop = '1.5vmin';
    $title.container.style.minHeight = '0.85em';


    // PORTFOLIO CONTENT //
    $galleryHolder.remove();
    $galleryHolder = document.createElement('div');
    $content.appendChild($galleryHolder);
    $galleryHolder.style.flexGrow = '1';
    $galleryHolder.style.width = '100%';
    $galleryHolder.style.overflow = 'hidden';


    let amountOfColumns = 5;

    if(window.innerWidth < window.innerHeight * 1.3){
        amountOfColumns = 4
    }
    if(window.innerWidth < window.innerHeight){
        amountOfColumns = 3
    };

    const $gallery = new Gallery({
        columns : amountOfColumns,
        gap : '20px',
        images : $images,
    });

    $galleryHolder.appendChild($gallery.container);

    $gallery.container.style.width = 'calc(100% + ' + $ui.borderSize + ' - 2px)';
    $gallery.container.style.marginLeft =  '-' + $ui.borderSize;
    $gallery.container.style.height = '100%';
    $gallery.container.style.border = 'solid ' + $ui.borderSize + ' ' + $ui.colors.blue;
    $gallery.container.style.borderRadius = $ui.borderRadius;
};

buildPortfolio();



//ABOUT US

function buildAboutUs(){

    $titleTabPortfolio.deactivate();
    $titleTabAboutUs.activate();
    $titleTabContact.deactivate();

    $title.container.remove();
    $title = new TitleText({
        //text : 'CAPTCHA',
        text : 'Om_oss',
        fontSize : '7em',
        margin : '0.4em',
        color : $ui.colors.blue,
        secondColor : $ui.colors.white,
        borderSize : $ui.borderSize, 
        time : 100,
        subtitle : 'POV, DU ÄR EN AI',
    });

    $titleHolder.appendChild($title.container);

    $title.container.style.right = '-1.5vmin';
    $title.container.style.position = 'relative';
    $title.container.style.paddingLeft = '5px';
    $title.container.style.maxWidth = '70%';
    $title.container.style.marginTop = '1.5vmin';
    $title.container.style.minHeight = '0.85em';

    //

    $galleryHolder.remove();
    $galleryHolder = document.createElement('div');
    $content.appendChild($galleryHolder);

    //$galleryHolder.innerHTML = 'The modern artist today faces several new and complex challenges in effectively protecting their art from theft and copying. One of the most relevant and current challenges is artificial intelligence. Artificial intelligence (AI) uses databases filled with information as the foundation for the responses and outputs it generates based on our prompts. Art from artists whose works are available online, often due to practices like web scraping, is used by AI as a basis for generating art and mimicking artistic styles. This happens regardless of the artist’s consent to have their works copied and used in the creation of new ones. We therefore want to take a closer look at the various security measures an artist must employ to protect their works from theft and copying.<br><br> Our project focuses on symbolising the extent of these measures through a website filled with obstacles in different forms, aiming to illustrate what an artist might be forced to do to prevent artificial intelligence from accessing a piece of art online.'
    $galleryHolder.innerHTML = 'Det moderna konstlandskapet står inför nya utmaningar, där AI spelar en central roll i att hota konstnärers rättigheter och ägandeskap över sina verk. Detta projekt undersöker tekniska och dels juridiska aspekter av AI:s användning av stora databaser, ofta byggda på otillåten åtkomst av konstverk via digitala tekniker som te.x. web-scraping. Vi har genom en interaktiv webbplats illustrerat mängden åtgärder som en konstnär kan behöva vidta för att skydda sin konst. Hemsidan fungerar både som ett konstverk i sig och en visuell plattform, där hinder såsom Captchas och Glaze symboliserar nödvändiga skyddsåtgärder mot AI:s intrång.<br><br> Syftet med projektet är att problematisera det ökade beroendet av digital teknologi och stimulera en diskussion om hur konstnärer kan navigera i detta nya, komplexa landskap. Vi föreslår att lösningen inte enbart ligger i tekniska skydd, utan i att skapa ett medvetet och etiskt ramverk som förenar teknikens möjligheter med respekt för mänskligt skapande.'
    $galleryHolder.style.textIndent = '60%';
    $galleryHolder.style.fontSize = '1.3em';
};

//CONTACT

function buildContact(){

    $titleTabPortfolio.deactivate();
    $titleTabAboutUs.deactivate();
    $titleTabContact.activate();
    
    $title.container.remove();
    $title = new TitleText({
        text : 'Kontact',
        fontSize : '7em',
        margin : '0.4em',
        color : $ui.colors.blue,
        secondColor : $ui.colors.white,
        borderSize : $ui.borderSize, 
        time : 100,
        subtitle : 'POV, DU ÄR EN AI',
    });

    $titleHolder.appendChild($title.container);

    $title.container.style.right = '-1.5vmin';
    $title.container.style.position = 'relative';
    $title.container.style.paddingLeft = '5px';
    $title.container.style.maxWidth = '70%';
    $title.container.style.marginTop = '1.5vmin';
    $title.container.style.minHeight = '0.85em';

    //

    $galleryHolder.remove();
    $galleryHolder = document.createElement('div');
    $content.appendChild($galleryHolder);
};

/*
    // Cube //
const $cube = new Cube({
    perspective : '600px',
    size : 40,
    xSpeed : 0.05,
    ySpeed : 0.3,
    animate : true,
    color : $ui.colors.blue,
    borderColor : $ui.colors.white,
    borderSize : 1.5,
});


$content.appendChild($cube.container);
document.body.addEventListener('click', function(){
    $cube.speedUp(8, 750, 2000);
});
*/


/*
// CAPTCHA //
const testCaptcha = new ImageCaptcha({
    type : 'random',
    width : '400px',
    heightMult : 1.2,
    tilePadding : '4px',
    tileBorderRadius : '0vmin',
    rows : 4,
    columns : 5,
    chance : 0.5,
    overlayColor : $ui.colors.blue,
    batches : [
        $imageCaptchaBatches.cat, 
        $imageCaptchaBatches.dog,
        $imageCaptchaBatches.rabbit,  
    ],
    correctEvent : function(){
        console.log('correct!');
    },
    incorrectEvent : function(){
        document.body.style.pointerEvents = 'none';
        shakeContent(800);
        let incorrectSign = document.createElement('div');
        document.body.appendChild(incorrectSign);
        incorrectSign.innerHTML = 'INCORRECT!';

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
        }, 800);

    },
});

$content.appendChild(testCaptcha.container);

testCaptcha.container.style.position = 'fixed';
testCaptcha.container.style.marginLeft = 'calc(50% - 200px)';
testCaptcha.container.style.marginTop = 'calc(25% - 20vw)';
testCaptcha.container.style.background = $ui.colors.white;
testCaptcha.container.style.border = 'solid calc(' + $ui.borderSize + ' * 4) ' + $ui.colors.blue;
testCaptcha.container.style.borderRadius = $ui.borderRadius;
testCaptcha.container.style.padding = testCaptcha.container.style.paddingBottom = '0.5em';
testCaptcha.container.style.zIndex = '3';

//testCaptcha.container.style.marginLeft = 'calc(50% - 200px)';
//testCaptcha.container.style.marginTop = 'calc(25% - 200px)';


*/