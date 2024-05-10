// ANONYMOUS FUNCTION
const navSlide = () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.menu-content');


  burgerMenu.addEventListener('click', () => {

    // 
    burgerMenu.classList.toggle('toggle');

    // 
    navMenu.classList.toggle('nav-active');
  });
}
navSlide();