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



//Texto da Biografia

let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let text4 = document.querySelector('.text4');
let text5 = document.querySelector('.text5');
let text6 = document.querySelector('.text6');

let showOn = document.querySelector('.showOn');

let verify1 = document.getElementById('verify1');
let verify2 = document.getElementById('verify2');
let verify3 = document.getElementById('verify3');
let verify4 = document.getElementById('verify4');
let verify5 = document.getElementById('verify5');
let verify6 = document.getElementById('verify6');

let target1 = document.querySelector('.circle1');
let target2 = document.querySelector('.circle2');
let target3 = document.querySelector('.circle3');
let target4 = document.querySelector('.circle4');
let target5 = document.querySelector('.circle5');
let target6 = document.querySelector('.circle6');

let hr1 = document.querySelector('.hr1');
let hr2 = document.querySelector('.hr2');
let hr3 = document.querySelector('.hr3');
let hr4 = document.querySelector('.hr4');
let hr5 = document.querySelector('.hr5');
let hr6 = document.querySelector('.hr6');

target1.addEventListener('click', function (){
    if(verify1.classList.contains('showOff1')){
        verify1.classList.remove('showOff1');
        verify1.classList.add('showOn1');

        target1.style.backgroundColor = 'black';
        target1.style.transition = 'all 1s';
        hr1.style.backgroundColor = 'black';

        
    }else{
        verify1.classList.remove('showOn');
        verify1.classList.add('showOff1');
        target1.style.backgroundColor = 'white';
        target1.style.transition = 'all 1s';
        hr1.style.backgroundColor = 'white';
        
    }
})

target2.addEventListener('click', function (){
    if(verify2.classList.contains('showOff2')){
        verify2.classList.remove('showOff2');
        verify2.classList.add('showOn2');

        target2.style.backgroundColor = 'black';
        target2.style.transition = 'all 1s';
        hr2.style.backgroundColor = 'black';
    }else{
        verify2.classList.remove('showOn');
        verify2.classList.add('showOff2');
        target2.style.backgroundColor = 'white';
        target2.style.transition = 'all 1s';
        hr2.style.backgroundColor = 'white';
        
    }
})

target3.addEventListener('click', function (){
    if(verify3.classList.contains('showOff3')){
        verify3.classList.remove('showOff3');
        verify3.classList.add('showOn3');

        target3.style.backgroundColor = 'black';
        target3.style.transition = 'all 1s';
        hr3.style.backgroundColor = 'black';
    }else{
        verify3.classList.remove('showOn');
        verify3.classList.add('showOff3');
        target3.style.backgroundColor = 'white';
        target3.style.transition = 'all 1s';
        hr3.style.backgroundColor = 'white';
        
    }
})

target4.addEventListener('click', function (){
    if(verify4.classList.contains('showOff4')){
        verify4.classList.remove('showOff4');
        verify4.classList.add('showOn4');

        target4.style.backgroundColor = 'black';
        target4.style.transition = 'all 1s';
        hr4.style.backgroundColor = 'black';
    }else{
        verify4.classList.remove('showOn');
        verify4.classList.add('showOff4');
        target4.style.backgroundColor = 'white';
        target4.style.transition = 'all 1s';
        hr4.style.backgroundColor = 'white';
        
    }
})

target5.addEventListener('click', function (){
    if(verify5.classList.contains('showOff5')){
        verify5.classList.remove('showOff5');
        verify5.classList.add('showOn5');

        target5.style.backgroundColor = 'black';
        target5.style.transition = 'all 1s';
        hr5.style.backgroundColor = 'black';
    }else{
        verify5.classList.remove('showOn');
        verify5.classList.add('showOff5');
        target5.style.backgroundColor = 'white';
        target5.style.transition = 'all 1s';
        hr5.style.backgroundColor = 'white';
        
    }
})

target6.addEventListener('click', function (){
    if(verify6.classList.contains('showOff6')){
        verify6.classList.remove('showOff6');
        verify6.classList.add('showOn6');

        target6.style.backgroundColor = 'black';
        target6.style.transition = 'all 1s';
        hr6.style.backgroundColor = 'black';
    }else{
        verify6.classList.remove('showOn');
        verify6.classList.add('showOff6');
        target6.style.backgroundColor = 'white';
        target6.style.transition = 'all 1s';
        hr6.style.backgroundColor = 'white';
        
    }
})