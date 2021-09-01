const welcomeSection = document.querySelector('.viewport');
const slides = welcomeSection.getElementsByClassName('welcome-slide');
const button = document.getElementById('button');
var i = 0;

function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
    button.style.transform = i > 0 ? "rotate(90deg)" : "rotate(-90deg)";
}