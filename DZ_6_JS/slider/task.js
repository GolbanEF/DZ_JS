(function() {
    const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
    const sliderArrowNext = document.querySelector('.slider__arrow_next');
  
    let slideIndex = 1;
  
    function showSlides(num) {
      let sliderItem = document.querySelectorAll(".slider__item");
  
      if (num > sliderItem.length) {
        slideIndex = 1;
      }
  
      if (num < 1) {
        slideIndex = sliderItem.length;
      }
  
      for (let index = 0; index < sliderItem.length; index++) {
        sliderItem[index].classList.remove("slider__item_active");
      }
  
      sliderItem[slideIndex - 1].classList.add("slider__item_active");
    }
  
    function plusSlides(num) {
      showSlides(slideIndex += num);
    }
  
    sliderArrowPrev.addEventListener('click', () => {
      plusSlides(-1);
    })
  
    sliderArrowNext.addEventListener('click', () => {
      plusSlides(1);
    })
  
  })();