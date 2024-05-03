AOS.init();


const menuOpen = document.querySelector('.ri-menu-2-line')
const menuClose = document.querySelector('.ri-close-line')
const menu = document.querySelector('nav ul')

menuOpen.addEventListener('click', function(){
    menu.style.top = '30%'
    menuClose.style.display = 'block'
    menuOpen.style.display = 'none'
})

menuClose.addEventListener('click', function(){
    menu.style.top = '-30%'
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
})

document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', function(){
        menu.style.top = '-30%'
        menuClose.style.display = 'none'
        menuOpen.style.display = 'block'
    })
})