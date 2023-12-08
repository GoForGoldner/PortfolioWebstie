const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const fadeIn = document.querySelector('.aboutMe');

fadeIn.addEventListener("scroll", () => {
  fadeIn.classList.toggle('active');
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))



function changeColor(){
  document.querySelector('.text1').style.color = 'blue';
}

function disableScroll() {

}

function enableScroll() {
    window.onscroll = function() {};
}

