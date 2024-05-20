// SLIDES - CONTENT
const bannerSlide = () =>{
  const sliderContainer = document.querySelector('#slideContent');

  // BUTTONS
  const btnLeft = document.querySelector('#btnSlidePrev');
  const btnRight = document.querySelector('#btnSlideNext');

  // SLIDES ORDER
  let slides = document.querySelectorAll('.slides')
  let lastSlider = slides[slides.length -1];

  // METHOD
  sliderContainer.insertAdjacentElement('afterbegin', lastSlider);
  

  // PREV
  function prevSlide(){
    let slides = document.querySelectorAll('.slides');
    let lastSlider = slides[slides.length -1];

    sliderContainer.style.marginLeft = '0%';
    sliderContainer.style.transition = 'all 0.5s ';

    setTimeout( () => {
      sliderContainer.style.transition = 'none';

      sliderContainer.insertAdjacentElement('afterbegin', lastSlider);
      sliderContainer.style.marginLeft = '-100%'
    }, 500);
  }

  // NEXT
  function nextSlide(){
    let firstSlider = document.querySelectorAll('.slides')[0];

    sliderContainer.style.marginLeft = '-200%';
    sliderContainer.style.transition = 'all 0.5s'

    setTimeout( () => {
      sliderContainer.style.transition = 'none';
      sliderContainer.insertAdjacentElement('beforeend', firstSlider);
      sliderContainer.style.marginLeft = '-100%';
    }, 500);
  }

  // BUTTONS FUNCTIONS
  btnLeft.addEventListener('click', () => {
    prevSlide();
  });

  btnRight.addEventListener('click', () => {
    nextSlide();
  });
  // btnLeft.addEventListener('click', prevSlide());
  // btnRight.addEventListener('click', nextSlide());

    // SLIDER AUTOMATIC
  // setInterval(nextSlide())
  setInterval( () => {
    nextSlide();
  }, 4000);


}
bannerSlide();