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

function readHere(pdfPath) {
    // Construct the path to the PDF file
    var pdfFilePath = pdfPath + ".pdf"; // Replace with your actual path

    // Open the PDF file in a new tab or window
    window.open(pdfFilePath, '_blank');
}