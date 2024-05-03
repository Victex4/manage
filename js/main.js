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

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
