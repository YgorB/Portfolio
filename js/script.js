//MENU
let mobileMenu = document.querySelector('.Menu');

//Desabilita e habilita o Menu
function MenuShowOff(){
    let navList = document.querySelector('.nav-list');

    if(navList.classList.contains('ShowOff')){
        navList.classList.add('ShowOn')
        navList.classList.remove('ShowOff');
    }else{
        navList.classList.add('ShowOff');
        navList.classList.remove('ShowOn');
        
    }
}

mobileMenu.addEventListener('click', MenuShowOff);

//VIDEO:
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let image4 = document.getElementById('image4');



const video = document.querySelector('.videos');
const audio = document.querySelector('.audios');
let TextP = document.getElementById('textP');
let play = document.querySelector('.play')

image1.addEventListener('click', () =>{

    video.src = "./assets/videos/LagoDosCisnes.mp4";

    TextP.innerHTML = "O lago dos cisnes"
    image1.style.opacity = "0.5";
    image2.style.opacity = '1';
    image3.style.opacity = '1';
    image4.style.opacity = '1';
  
});

image2.addEventListener('click', () =>{
    video.src = "./assets/audios/Dvorak.mp3";
    TextP.innerHTML = "Dvorak - Symphony no. 9";

    image1.style.opacity = "1";
    image2.style.opacity = '0.5';
    image3.style.opacity = '1';
    image4.style.opacity = '1';
});

image3.addEventListener('click', () => {
    video.src = "./assets/audios/Bach.mp3";
    TextP.innerHTML = "Bach- Toccata and Fugue in D Minor";

    image1.style.opacity = "1";
    image2.style.opacity = '1';
    image3.style.opacity = '0.5';
    image4.style.opacity = '1';
})

image4.addEventListener('click', () =>{
    video.src = "./assets/audios/Mozart.mp3";
    TextP.innerHTML = "Mozart- Rondo Alla Turca";

    image1.style.opacity = "1";
    image2.style.opacity = '1';
    image3.style.opacity = '1';
    image4.style.opacity = '0.5';
})

