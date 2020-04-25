const globals = {
    audio: true
}
/*
Modificación de codigo por: Erika Johana Gonzalez Cuartas
CC.1094962391
*/
// Audio
buttonClick = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Buttonclick.mp3');
featured = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/featured.mp3');
slideSlow = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/slideSlow.mp3');
wrong = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Wrong.mp3');
bg = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/retrogameloop.mp3');

wrong.volume = 0.2;
// ## Create a function to play our sounds
function playSound(sound) {
    if (globals.audio) {

        sound.play(); // Play sound
    }
}

function playAudio(sound) {

    sound.loop = true;
    sound.volume = 0.7;
    sound.play(); // Play sound

}

$(document).ready(function() {
    setTimeout(function(){
        $('button').animate({'opacity': 1});
    }, 2000)

})
var person;
$('.loader').click(function() {
    $('.main_inner__loading').addClass('loaded');
    person = prompt("Por favor ingrese su nombre", "");
    playAudio(bg);    
})

audioSwitch = 0;
sfxSwitch = 0;

$('.options_sf').click(function(){
    if(sfxSwitch == 0) {
        globals.audio = false
        sfxSwitch = 1;
        $(this).css('opacity','0.4')
    } else {
        globals.audio = true
        sfxSwitch = 0;
        $(this).css('opacity','1')
    }
});
$('.options_bg').click(function(){
    console.log('test')
    if(audioSwitch == 0) {
        $(bg).animate({volume: 0}, 600);
        audioSwitch = 1;
        $(this).css('opacity','0.4')
    } else {
        $(bg).animate({volume: 0.7}, 600);
        audioSwitch = 0;
        $(this).css('opacity','1')
    }
})

// Quiz options
const sceneDelay = 870; // Scene delay in ms

// Elements
const answers = $('.main_inner__answers');
const answer = answers.find('.answer');
const circle = $('.main_inner__circle');

// Quiz progress
var progress = 1; // Change this to your scene number

// Transition check
var transitioning = false;

// End circle scale
const circleScale = 10;

// Our main array. You must add your details to this.
const scenes = [
    {
        name: 'akuaku', // Must mirror class name
        author: '¿HA QUE GRADOS DE LAS FUERZAS MILITARES DE COLOMBIA PERTENECEN ESTAS INSIGNIAS RESPECTIVAMENTE?', // Your name
        codepenprofile: 'jotavejv', // Your Codepen profile link
        twitterprofile: '_jotavejv', // Your Codepen profile link
        answer: 'Mayor, Mayor general, Teniente', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#3C5E4D', // Page background color for your scene
        hint: 'UKA UKA is FREEEEE!'
    },{
        name: 'kirby', // Must mirror class name
        author: '¿HA QUIEN PERTENECE ESTA INSIGNIA?', // Your name
        codepenprofile: 'kathykato', // Your Codepen profile link
        twitterprofile: 'kato_katherine', // Your Codepen profile link
        answer: 'Sargento Mayor', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#503A46', // Page background color for your scene
        hint: 'A Nintendo classic'
    }, {
        name: 'hexipal', // Must mirror class name
        author: '¿CUAL HIMNO NO PERTENECE A LA LISTA DE HIMNOS INSTITUCIONALES DEL EJÉRCITO?', // Your name
        codepenprofile: 'KristopherVanSant', // Your Codepen profile link
        twitterprofile: 'KristopherVanSant', // Your Codepen profile link
        answer: 'Himno al arma', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#1B2D3B', // Page background color for your scene
        hint: 'An animated puzzle adventure'
    }, {
        name: 'moogle', // Must mirror class name
        author: '¿CUAL DE ESTOS LEMAS PRESENTA LAS COMUNICACIONES MILITARES?', // Your name
        codepenprofile: 'jnwright', // Your Codepen profile link
        twitterprofile: 'salsaverde', // Your Codepen profile link
        answer: 'Ciencia dominio y vigilancia', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: 'rgb(102, 107, 106)', // Page background color for your scene
        hint: 'Kupo!'
    }, {
        name: 'mario', // Must mirror class name
        author: '¿CUANTAS TECNOLOGÍAS COMPLEMENTARIAS TENEMOS EN NUESTRA ESCUELA MILITAR DE SUBOFICIALES (EMSUB)?', // Your name
        codepenprofile: 'miffili', // Your Codepen profile link
        twitterprofile: 'KlaraMiffili', // Your Codepen profile link
        answer: '4', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#3D4746', // Page background color for your scene
        hint: 'Letsa gooooooo!'
    }, {
        name: 'buster', // Must mirror class name
        author: 'LA SIGUIENTE FRASE HACE ALUSIÓN A QUE ORACIÓN MILITAR:', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Oración a la milicia', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#3F6452', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },
    {
        name: 'buster1', // Must mirror class name
        author: '¿CUANTAS PLACAS DE IDENTIFICACIÓN DEBE TENER UN MILITAR DE REVISTA?', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: '2', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#849491', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster2', // Must mirror class name
        author: 'EL COLOR NEGRO REPRESENTA EL ARMA DE ', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Artillería ', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#223544', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster3', // Must mirror class name
        author: 'CUÁL ES EL ARMA DE LAS FUERZAS MILITARES QUE UTILIZA LA DIVISA NARANJA', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Comunicaciones ', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#5B4A54', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    
    {
        name: 'buster4', // Must mirror class name
        author: 'CUÁL ES EL LEMA DEL ARMA DE LOGÍSTICA MILITAR ', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Íntegros y valientes', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#3B5C4B', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },
    {
        name: 'buster5', // Must mirror class name
        author: 'CUANDO SUENA EL HIMNO NACIONAL QUE POSICIÓN DEBE TOMAR UN MILITAR', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Ponerse en posición firme y entonar el himno', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#849491', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster6', // Must mirror class name
        author: 'QUE SIGNIFICA LA CINTA QUE LLEVAMOS EN LA MANGA DERECHA DEL CAMUFLADO (LA CINTA DANTE)', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Dirección de aplicación de normas por la transparencia', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#223544', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },



    {
        name: 'buster8', // Must mirror class name
        author: '¿ si un alumno comete un acto disciplinario leve cuáles son sus respectivos correctivos que se aplica?', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Planas, ejercitamiento fisico.', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#3C5F4B', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster9', // Must mirror class name
        author: ' ¿en el camuflado se exige elementos de revista cuáles son?', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Pañuelo, peineta, lapicero, agenda, placas de identificación y brazaletes.', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#5B4A54', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster10', // Must mirror class name
        author: ' ¿el manejo del armamento, el principal requerimiento antes de manejar el armamento debe llevar…?', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'El dipsel de seguridad ', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#1B2D3B', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster11', // Must mirror class name
        author: ' ¿hay cuatro niveles por la cual usted pasa en la escuela militar de suboficiales para graduarse por lo tanto cuáles son?', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Alumno l, ll, lll y dragoneante', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#3F6452', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster12', // Must mirror class name
        author: '¿en una formación militar sea día tarde o noche el comandante saluda levantando su mano, los alumnos responden ?', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Buenos días tardes noches mi …. “patria honor lealtad fe en la causa”', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#849491', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster13', // Must mirror class name
        author: '¿Cuáles son las palabras claves para tener una buena convivencia en la escuela e incluso en toda nuestra carrera militar? ', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Que ordena, como ordene, orden cumplida.', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#223544', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster14', // Must mirror class name
        author: 'Completa la oración Colombia patria mía, te llevo con amor en mi corazón, y espero verte siempre grande respetada y libre…', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'En ti amo todo lo que me es querido, tus glorias, tu hermosura, mi hogar el fruto de mis esfuerzos, la realización de mis sueños, ser soldado tuyo es la mayor de mis glorias…', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#65825e', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster15', // Must mirror class name
        author: 'Lea el texto del círculo y responda: ¿cuál de los dos suboficiales puede ser comandante de una escuadra de un pelotón? ', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'Ambos suboficiales pueden estar a cargo de una escuadra ', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#1B2D3B', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster16', // Must mirror class name
        author: '¿Cuál es el arma más antigua del Ejército nacional colombiano? ', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'La infantería', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#849491', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },

    {
        name: 'buster16', // Must mirror class name
        author: '¿Cuál es el arma más antigua del Ejército nacional colombiano? ', // Your name
        codepenprofile: 'jcoulterdesign', // Your Codepen profile link
        twitterprofile: 'jamiecoulter89', // Your Codepen profile link
        answer: 'La infantería', // The correct game, we can obfuscate this later if we want to hide answers
        backgroundColor: '#3F6452', // Page background color for your scene
        hint: '1997 JRPG for PS1!'
    },
    
    
]

// List of random video games that our JS can pull from, feel free to add your own
const videoGames1 = [
    'Teniente Coronel, General y Capitan',
    'Coronel, Brigadier General y Subteniente',
    'Mayor, Capitan y General',
    'General, Mayor y Teniente'
]
const videoGames2 = [
    'Cabo primero',
    'Sargento Mayor de comando',
    'Sargento Viceprimero',
    'Cabo segundo'
]
const videoGames3 = [
    'Himno al Compañero',
    'Himno Nacional de Colombia',
    'Himno del Ejército Nacional de Colombia'
]
const videoGames4 = [
    'Vencer o morir ',
    'Salve usted la patria',
    'En guardia por la patria '
]

const videoGames5 = [
    '5',
    '8',
    '2'
]

const videoGames6 = [
    'Oración a la infantería',
    'Oración patria',
    'Oración de guerra '
]

const videoGames7 = [
    '1',
    '3',
    '5',
    '7'
]

const videoGames8 = [
    'Ingenieros militares',
    'Infantería ',
    'Inteligencia'
]

const videoGames9 = [
    'Inteligencia',
    'Artillería',
    'Ingenieros militares '
]

const videoGames10 = [
    'Paso de vencedores',
    'Deber antes que vida',
    'Vencer o morir'
]
const videoGames11 = [
    'Quedarse sentado y entonar el himno',
    'Ignorarlo y seguir caminando ',
    'Salir a correr'
]

const videoGames12 = [
    'Cinta de diferencia',
    'Cinta ganada por antigüedad',
    'Dirección de decision grupal'
]

const videoGames13 = [
    'Ejercitamiento físico ',
    'Annotacion negativa ',
    'Planas'
]

const videoGames14 = [
    'Pañuelo, espejo, corta uñas, peineta, lapicero, agenda y brazaletes. ',
    'Papel higiénico, cubiertos y bolso estudio ',
    'Peluqueado, Pañuelo, espejo, corta uñas, peineta, lapicero, agenda, placas de identificación y brazaletes.'
]

const videoGames15 = [
    'Que la culata tenga el pin',
    'Todas sus partes completas ',
    'Todas'
]

const videoGames16 = [
    'Alumno l, ll, lll de la pesada y dragoneante',
    'Alumno 1, brigadier de la liviana, brigadier de la pesada, dragoneante',
    'Alumnos en general sin importar el nivel '
]
const videoGames17 = [
    'Buenos días tardes noches mi…. “patria honor lealtad por mi patria mi lealtad es el honor fe en la causa orgulloso de ser suboficial “',
    'Buenos días tardes noches mi…. “patria honor lealtad por mi patria mi lealtad es el honor fe en la causa “',
    'Buenos días tardes noches mi…” ajua fe en la causa “'
]

const videoGames18 = [
    'Gracias mí, por favor mí, cumplida su orden mí.',
    'Ya voy hacerlo mi cabo, ya lo hice mi cabo, gracias mi cabo. ',
    'Gracias mí, por favor mí, cumplida su orden mí.'
]

const videoGames19 = [
    'Respetada y libre, te amo mi patria.',
    'Tu hogar el fruto de los esfuerzos, la realización los sueños de los que luchan',
    'En ti amo todo lo que me es querido, tus glorias, tu hermosura, mi hogar el fruto de mis esfuerzos, la realización de mis sueños, ser soldado tuyo es la mayor de mis sueños…'
]

const videoGames20 = [
    'El cabo Sánchez, ya que él es el más antiguo. ',
    'El cabo Flores, pues este es quien recibió instrucción de mando',
    'Ninguno de los dos suboficiales, ya que para este rango solo pueden ser asignados a pequeñas unidades'
]

const videoGames21 = [
    'La caballeria ',
    'La ingeniería ',
    'La artillería'
]
// Start by assigning colors and other props to the scene
function setUp() {

    // Lets start by setting the correct colors for our scene
    $('body').css('background', scenes[progress - 1].backgroundColor);
    circle.css('background', scenes[progress].backgroundColor);
    circle.find('.circles').css('background', scenes[progress].backgroundColor);

    // Then fade our first scene in
    $(`.scene:nth-of-type(${progress})`).fadeIn();

    // Loop through the array and add a breadcrum for each
    for(let i in scenes) {
        console.log("i erikaa"+i);
        $('.main_inner__breadcrumbs').append('<div class="breadcrumb"></div>');
    }

    // Set first to active
    $('.breadcrumb:first').addClass('active');

    // Calculate width of breadcrumbs
    let width = ($('.breadcrumb').length - 1) * 34;
    $('.main_inner__breadcrumbs').css('width', width);
}

// Set up initial scene
setUp();

// Initialise scene
function initScene(scene) {

    //alert(scene)
    // Get the next scene from our array
    let nextScene = $('.scene.' + scenes[progress - 1].name);

    // Bring the next scene in
    setTimeout(function(){
        nextScene.fadeIn();
        nextScene.css('bottom', '-400px');
    }, 500);

    // Change info
    $('.main_inner__title h1').text(scenes[progress - 1].author);
    $('.main_inner__info .codepen').attr('href' , `https://www.codepen.io/${scenes[progress - 1].codepenprofile}`);
    $('.main_inner__info .twitter').attr('href' , `https://www.twitter.com/${scenes[progress - 1].twitterprofile}`);

    // Change the hint
    $('.main_inner__title .hint').slideUp(function() {
        $('.main_inner__title .hint').text(scenes[progress - 1].hint);
    });

    // Bring the info in
    setTimeout(function() {
        $('.main_inner__info').css('bottom' , '40px');
        $('.main_inner__info').css('opacity' , '1');
    }, 700);

    // Clear any data on the answers
    answer.removeData();

    // Let assign the correct answer to one of the available answers

    // Pick a random number between 0 and 2
    let correctAnswer = Math.floor(Math.random() * 3); 
    let correctAnswerEl = $(answer[correctAnswer]);

    // Set the text of the answer element
    correctAnswerEl.text(scenes[scene - 1].answer);
    correctAnswerEl.data('correct', true);

    // Select the other answers and if no data set against it, pick a random game
    answer.each(function() {
        let el = $(this);
        if(!el.data('correct')) {

            if(scene==1){

            // Pick a random number between 0 and VG array length
            let rand = Math.floor(Math.random() * (videoGames1.length - 1));
            $(this).text(videoGames1[rand]);

            videoGames1.splice(rand, 1)
            }
            if(scene==2){

            // Pick a random number between 0 and VG array length
            let rand = Math.floor(Math.random() * (videoGames2.length - 1));
            $(this).text(videoGames2[rand]);
            videoGames2.splice(rand, 1)

            }
            if(scene==3){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames3.length - 1));
                $(this).text(videoGames3[rand]);
                videoGames3.splice(rand, 1)

            }

            if(scene==4){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames4.length - 1));
                $(this).text(videoGames4[rand]);
                videoGames4.splice(rand, 1)

            }
            
            if(scene==5){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames5.length - 1));
                $(this).text(videoGames5[rand]);
                videoGames5.splice(rand, 1)

            }
            if(scene==6){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames6.length - 1));
                $(this).text(videoGames6[rand]);
                videoGames6.splice(rand, 1)

            }

            if(scene==7){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames7.length - 1));
                $(this).text(videoGames7[rand]);
                videoGames7.splice(rand, 1)

            }

            if(scene==8){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames8.length - 1));
                $(this).text(videoGames8[rand]);
                videoGames8.splice(rand, 1)

            }

            if(scene==9){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames9.length - 1));
                $(this).text(videoGames9[rand]);
                videoGames9.splice(rand, 1)

            }

            if(scene==10){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames10.length - 1));
                $(this).text(videoGames10[rand]);
                videoGames10.splice(rand, 1)

            }

            if(scene==11){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames11.length - 1));
                $(this).text(videoGames11[rand]);
                videoGames11.splice(rand, 1)

            }

            if(scene==12){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames12.length - 1));
                $(this).text(videoGames12[rand]);
                videoGames12.splice(rand, 1)

            }
            
            if(scene==13){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames13.length - 1));
                $(this).text(videoGames13[rand]);
                videoGames13.splice(rand, 1)

            }

            
            if(scene==14){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames14.length - 1));
                $(this).text(videoGames14[rand]);
                videoGames14.splice(rand, 1)

            }

            
            if(scene==15){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames15.length - 1));
                $(this).text(videoGames15[rand]);
                videoGames15.splice(rand, 1)

            }

            
            if(scene==16){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames16.length - 1));
                $(this).text(videoGames16[rand]);
                videoGames16.splice(rand, 1)

            }

            
            if(scene==17){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames17.length - 1));
                $(this).text(videoGames17[rand]);
                videoGames17.splice(rand, 1)

            }

            
            if(scene==18){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames18.length - 1));
                $(this).text(videoGames18[rand]);
                videoGames18.splice(rand, 1)

            }
                        
            if(scene==19){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames19.length - 1));
                $(this).text(videoGames19[rand]);
                videoGames19.splice(rand, 1)

            }

                        
            if(scene==20){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames20.length - 1));
                $(this).text(videoGames20[rand]);
                videoGames20.splice(rand, 1)

            }

                
            if(scene==21){
                // Pick a random number between 0 and VG array length
                let rand = Math.floor(Math.random() * (videoGames21.length - 1));
                $(this).text(videoGames21[rand]);
                videoGames21.splice(rand, 1)

            }


        }
    });
}

// Check answer
function checkAnswer(el) {
    // If clicked answer has data stored
    if(el.data('correct'))
        return 'correct';
}

$(answer).mouseenter(function() {
    playSound(buttonClick);
});

// Bind answers to check, this should really be passed to another function but meh...
$(answer).click(function() {

    // Lets first scroll to the top of the page incase its mobile
    $("html, body").animate({ scrollTop: 0 }, "fast");

    // Start a transition
    if(!transitioning) {
        transitioning = true; // Check if not mid transition
        if(checkAnswer($(this))) {

            // Play sound
            playSound(featured);

            // Add breadcrumb class
            $('.breadcrumb.active').addClass('correct');

            // Add class to button
            $(this).addClass('correct');

            // Set up feedback message
            $('.main_inner__feedback').removeClass('wrong');
            $('.main_inner__feedback').text('Correcto').addClass('correct');
            $('.main_inner__feedback').css('transform', 'translateY(-50%) scale(1) rotate(0deg)');
        } else {
            // Add breadcrumb class
            $('.breadcrumb.active').addClass('wrong');

            playSound(wrong);

            // Add class to button
            $(this).addClass('wrong');

            // Set up feedback message
            $('.main_inner__feedback').removeClass('correct');
            $('.main_inner__feedback').text('Incorrecto').addClass('wrong');
            $('.main_inner__feedback').css('transform', 'translateY(-50%) scale(1) rotate(0deg)');
        }

        // Move breadcrumb
        $('.breadcrumb.active').removeClass('active').next().addClass('active');

        let currentScene = $('.scene.' + scenes[progress - 1].name);
        console.log(progress)

        currentScene.css('opacity', '0');
        console.log(currentScene)

        $('.main_inner__info').css('bottom' , '-50px');
        $('.main_inner__info').css('opacity' , '0');

        // Increase our progress in the quiz
        progress++;

        // End screen 
        if(progress == $('.scene').length + 1) {
            $('.main_inner__modalOverlay, .main_inner__modal, .main_inner__modalContent').show();
            if(person==""){
                person="Estudiante que no ingreso el nombre";
            }
            $('p.score').html(person+'. Usted tuvo ' + $('.breadcrumb.correct').length + ' de 21 correctas!')
        }

        // Some crazy animations. I've gone a bit nuts on using set timeouts, should really be using delays in CSS
        // So we start by setting the scale of our circle and moving the scene out, CSS transitions does the rest
        setTimeout(function() {
            circle.css('transform' , `translateY(-50%) scale(${circleScale})`);
            answer.css('left' , '100px')
            answer.css('opacity' , '0')
        }, 230);

        // Then after the transition is complete we set the background to the next color in our array
        // Then set the scale of the circle back to 0 (removing any transitions)
        setTimeout(function() {
            $('body').css('background', scenes[progress - 1].backgroundColor);
            circle.css({'transform' : `translateY(-50%) scale(0)`});
            circle.css({'transition-duration' : '0ms'})

            // Get some colors based on new bg
            let newHue = LightenDarkenColor(scenes[progress - 1].backgroundColor, 30);
            let newHueInfo = LightenDarkenColor(scenes[progress - 1].backgroundColor, -20);

            // Alter the hue of certain texts to match new bg color
            $('.main_inner__title a').css('color', newHue);
            $('.main_inner__info p').css('color', newHueInfo);
            $('.main_inner__info span').css('color', newHueInfo);



            $('.main_inner__feedback').css('transform', 'translateY(-50%) scale(0) rotate(20deg)');
        }, sceneDelay);

        // Then bring the circle back in and color it to the next bg in the array
        setTimeout(function() {
            answer.removeClass('correct');
            answer.removeClass('wrong');
            if(window.innerWidth > 1000) {
                circle.css({'transform' : `translateY(-50%) scale(1)`});
            } else {
                circle.css({'transform' : `translateY(calc(-50% - 110px)) scale(0.6)`});
            }
            circle.css({'transition-duration' : '500ms'});
            circle.css('background', scenes[progress].backgroundColor);
            circle.find('.circles').css('background', scenes[progress].backgroundColor);
            answer.css('left' , '0');
            answer.css('opacity' , '1');

            // Set timeout to transition to next scene
            playSound(slideSlow);

            initScene(progress);
            transitioning = false;
        }, sceneDelay + 100);
    }
});

// Show hint
$('.main_inner__title a').click(function() {
    $(this).next().slideToggle();  
    return false;
});

// Handle key presses
$(document).keypress(function(event) {
    if(event.charCode == 49) {
        answer[0].click();
    }
    if(event.charCode == 50) {
        answer[1].click();
    }
    if(event.charCode == 51) {
        answer[2].click();
    }
});

// Returns a lightened or darkened version of the passed hex
// Taken from CSS tricks
function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

// Initialise the quiz
function initQuiz() {
    initScene(progress);
}


class Grain {
    constructor (el) {
        /**
     * Options
     * Increase the pattern size if visible pattern
     */
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; // 8
        this.patternAlpha = 12; // int between 0 and 255,

        /**
     * Create canvas
     */
        this.canvas = el;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);

        /**
     * Create a canvas that will be used to generate grain and used as a
     * pattern on the main canvas.
     */
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

        /**
     * Prebind prototype function, so later its easier to user
     */
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);

        this.frame = 0;

        window.addEventListener('resize', this.resize);
        this.resize();

        window.requestAnimationFrame(this.loop);
    }

    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }

    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;

        // put a random shade of gray into every pixel of the pattern
        for (let i = 0; i < patternPixelDataLength; i += 4) {
            // const value = (Math.random() * 255) | 0;
            const value = Math.random() * 255;

            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
    }

    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;

        // clear canvas
        ctx.clearRect(0, 0, width, height);

        // fill the canvas using the pattern
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }

    loop () {
        // only update grain every n frames
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
            this.update();
            this.draw();
        }

        window.requestAnimationFrame(this.loop);
    }
}

function twShare(url, title, winWidth, winHeight) {
    const winTop = 100;
    const winLeft = 100;
    window.open(`https://twitter.com/intent/tweet?text=${title}`, 'sharer', `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth},height=${winHeight}`);
}

pen_id = $('._pen_id').text();

$('body').on('click', '.share1', () => {
    window.location="";
});

$('body').on('click', '.share', () => {
    twShare(`https://codepen.io/jcoulterdesign/full/a1b3ea524ead4700015153bb95b881c3`, `Obtuve ${$('.breadcrumb.correct').length} de 21 preguntas correctas en el Quiz del ejercito presentado por David Cuartas.`, 520, 350);
    return false;
});

/**
 * Initiate Grain
 */
const el = document.querySelector('.grain');
const grain = new Grain(el);

//$('.main_inner__loading').fadeOut()

initQuiz();

// 8 questions
// Find the mario
// Release screen rec and tweet - 20