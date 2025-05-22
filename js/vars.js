const $ui = {
    colors : {
        white : '#f5f5f5',
        blue : '#2824e7',
        lightBlue : '#c2c1f2',
        red : '#ff0000',
    },
    borderSize : '2px',
    borderRadius : '3vmin',
};
const $imageCaptchaBatches = {
    cat : {
        name : 'KATTER',
        url : './assets/random_captcha_images/cat/',
        size : 20,
    },
    dog : {
        name : 'HUNDAR',
        url : './assets/random_captcha_images/dog/',
        size : 20,
    },
    rabbit : {
        name : 'KANINER',
        url : './assets/random_captcha_images/rabbit/',
        size : 20,
    },

};
const $imageCaptchaBatchSize = 20;

const $iconMap = ['assets/icons/ac_plug.png','assets/icons/accessibility.png','assets/icons/appwizard.png','assets/icons/big_keys.png','assets/icons/book_pad.png','assets/icons/briefcase.png','assets/icons/calendar.png','assets/icons/cd_audio.png','assets/icons/cd_drive.png','assets/icons/certificate.png','assets/icons/chip_ramdrive.png','assets/icons/clean_drive.png','assets/icons/computer_2.png','assets/icons/computer_sound.png','assets/icons/computer.png','assets/icons/contrast.png','assets/icons/defragment.png','assets/icons/desktop.png','assets/icons/directory_closed.png','assets/icons/directory_explorer.png','assets/icons/directory_open.png','assets/icons/erase_file.png','assets/icons/executable.png','assets/icons/fax_machine.png','assets/icons/floppy_drive.png','assets/icons/font_adobe.png','assets/icons/help_book.png','assets/icons/help_sheet.png','assets/icons/hourglass.png','assets/icons/image.png','assets/icons/kbd_mouse.png','assets/icons/keys.png','assets/icons/msg_error.png','assets/icons/msg_warning.png','assets/icons/network_drive.png','assets/icons/question_mark.png','assets/icons/stopwatch.png','assets/icons/two_windows.png','assets/icons/window_abc.png','assets/icons/window_objs.png'];

let $images = [
    {
        code : 'fisk sol stol',
        url : './assets/art/rococo/rococo_0.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_0.jpg',
    },
    {
        code : 'bok hund hus',
        url : './assets/art/rococo/rococo_1.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_1.jpg'
    },
    {
        code : 'äpple bord sko',
        url : './assets/art/rococo/rococo_2.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_2.jpg'
    },
    {
        code : 'vatten bil blomma',
        url : './assets/art/rococo/rococo_3.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_3.jpg'
    },
    {
        code : 'katt penna fönster',
        url : './assets/art/rococo/rococo_4.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_4.jpg'
    },
    {
        code : 'boll träd lampa',
        url : './assets/art/rococo/rococo_5.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_5.jpg'
    },
    {
        code : 'mygga cykel glass',
        url : './assets/art/rococo/rococo_6.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_6.jpg'
    },
    {
        code : 'fågel nyckel sked',
        url : './assets/art/rococo/rococo_7.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_7.jpg'
    },
    {
        code : 'snö jacka kudde',
        url : './assets/art/rococo/rococo_8.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_8.jpg'
    },
    {
        code : 'barn sång båt',
        url : './assets/art/rococo/rococo_9.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_9.jpg'
    },
    {
        code : 'hatt väg hand',
        url : './assets/art/rococo/rococo_10.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_10.jpg'
    },
    {
        code : 'måne öga stol',
        url : './assets/art/rococo/rococo_11.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_11.jpg'
    },
    {
        code : 'smör bok skor',
        url : './assets/art/rococo/rococo_12.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_12.jpg'
    },
    {
        code : 'gris mat flaska',
        url : './assets/art/rococo/rococo_13.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_13.jpg'
    },
    {
        code : 'sko näsa väska',
        url : './assets/art/rococo/rococo_14.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_14.jpg'
    },
    {
        code : 'hår tröja tidning',
        url : './assets/art/rococo/rococo_15.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_15.jpg'
    },
    {
        code : 'sten skog tåg',
        url : './assets/art/rococo/rococo_16.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_16.jpg'
    },
    {
        code : 'hjärta nyhet eld',
        url : './assets/art/rococo/rococo_17.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_17.jpg'
    },
    {
        code : 'ring mun fot',
        url : './assets/art/rococo/rococo_18.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_18.jpg'
    },
    {
        code : 'fönster tak vägg',
        url : './assets/art/rococo/rococo_19.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_19.jpg'
    },
    {
        code : 'hjul smörgås hatt',
        url : './assets/art/rococo/rococo_20.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_20.jpg'
    },
    {
        code : 'blod potatis fisk',
        url : './assets/art/rococo/rococo_21.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_21.jpg'
    },
    {
        code : 'spik boll dörr',
        url : './assets/art/rococo/rococo_22.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_22.jpg'
    },
    {
        code : 'nål bok sked',
        url : './assets/art/rococo/rococo_23.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_23.jpg'
    },
    {
        code : 'kaka gren tid',
        url : './assets/art/rococo/rococo_24.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_24.jpg'
    },
    {
        code : 'glass sten flagga',
        url : './assets/art/rococo/rococo_25.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_25.jpg'
    },
    {
        code : 'sked väg morot',
        url : './assets/art/rococo/rococo_26.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_26.jpg'
    },
    //restart
    {
        code : 'arm nyckel sko',
        url : './assets/art/rococo/rococo_0.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_0.jpg',
    },
    {
        code : 'trumma blomma häst',
        url : './assets/art/rococo/rococo_1.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_1.jpg'
    },
    {
        code : 'penna fågel röst',
        url : './assets/art/rococo/rococo_2.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_2.jpg'
    },
    {
        code : 'hund klocka bröd',
        url : './assets/art/rococo/rococo_3.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_3.jpg'
    },
    {
        code : 'sol öra banan',
        url : './assets/art/rococo/rococo_4.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_4.jpg'
    },
    {
        code : 'mjölk päron tröja',
        url : './assets/art/rococo/rococo_5.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_5.jpg'
    },
    {
        code : 'bokstav eld cykel',
        url : './assets/art/rococo/rococo_6.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_6.jpg'
    },
    {
        code : 'vatten mås knapp',
        url : './assets/art/rococo/rococo_7.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_7.jpg'
    },
    {
        code : 'tall kudde ben',
        url : './assets/art/rococo/rococo_8.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_8.jpg'
    },
    //correct
    {
        code : 'sked fjäril hus',
        //url : './assets/art/rococo/rococo_9.jpg',
        url : './assets/art/rococo/rococo.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_9.jpg'
    },
    {
        code : 'lampa sax kaka',
        url : './assets/art/rococo/rococo_10.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_10.jpg'
    },
    {
        code : 'ris vägg orm',
        url : './assets/art/rococo/rococo_11.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_11.jpg'
    },
    {
        code : 'finger yxa glas',
        url : './assets/art/rococo/rococo_12.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_12.jpg'
    },
    {
        code : 'kopp trappa snigel',
        url : './assets/art/rococo/rococo_13.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_13.jpg'
    },
    {
        code : 'himmel skägg gren',
        url : './assets/art/rococo/rococo_14.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_14.jpg'
    },
    {
        code : 'lejon vatten kudde',
        url : './assets/art/rococo/rococo_15.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_15.jpg'
    },
    {
        code : 'sko fönster eld',
        url : './assets/art/rococo/rococo_16.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_16.jpg'
    },
    {
        code : 'sten penna orm',
        url : './assets/art/rococo/rococo_17.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_17.jpg'
    },
    {
        code : 'häst bok blommor',
        url : './assets/art/rococo/rococo_18.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_18.jpg'
    },
    {
        code : 'kaka hjul hatt',
        url : './assets/art/rococo/rococo_19.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_19.jpg'
    },
    {
        code : 'skor sol vind',
        url : './assets/art/rococo/rococo_20.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_20.jpg'
    },
    {
        code : 'glas näsa bok',
        url : './assets/art/rococo/rococo_21.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_21.jpg'
    },
    {
        code : 'spade tröja mat',
        url : './assets/art/rococo/rococo_22.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_22.jpg'
    },
    {
        code : 'boll snö träd',
        url : './assets/art/rococo/rococo_23.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_23.jpg'
    },
    {
        code : 'fågel limpa tak',
        url : './assets/art/rococo/rococo_24.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_24.jpg'
    },
    {
        code : 'glass yxa nyckel',
        url : './assets/art/rococo/rococo_25.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_25.jpg'
    },
    {
        code : 'väska fot ring',
        url : './assets/art/rococo/rococo_26.jpg',
        glaze : './assets/art/rococo/glaze/rococo_glaze_26.jpg'
    },
];

for(let i = 0; i < $images.length; i++){
    $images[i].hidden = true;
    $images[i].watermarked = false;
    $images[i].glazed = false;

$images[i].puzzle = 'randomImageCaptcha';
/*
    if(Math.random() < 0.333){
        $images[i].puzzle = 'randomImageCaptcha';
    }else if(Math.random() < 0.666){
        $images[i].puzzle = 'watermark';
    }else{
        $images[i].puzzle = 'glaze';
    };
*/
};


//$images[0].puzzle = 'watermark';
//$images[1].puzzle = 'randomImageCaptcha';
//$images[2].puzzle = 'glaze';
