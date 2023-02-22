// animação de renderização

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const animateScroll = () =>{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass);
        }
        console.log(element.offsetTop)
    })
}

animateScroll()

window.addEventListener('scroll', function(){
    animateScroll()
})