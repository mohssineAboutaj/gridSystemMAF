/*
  * Project Name : slider show MAF
  * Athor        : Mohssine Aboutaj
  * version      : v1.0
  * Date         : 14/11/2017
  * Description  : this is simple slider show created by Mohssine Aboutaj using javaScript and Css3
  * License      : Free
*/

// Make variables and create the Arrows element
var mainSliderBox = document.querySelector('.sliderShowMAF'),
    sliderBoxs = mainSliderBox.querySelectorAll('.sliderBox'),
    rightArrow = document.createElement('span'),
    leftArrow = document.createElement('span'),
    i = 0;

// set content and classes in the Arrows
rightArrow.innerHTML = '<i class="fa fa-chevron-right fa-2x"></i>';
rightArrow.classList = 'rightArrow';
leftArrow.innerHTML = '<i class="fa fa-chevron-left fa-2x"></i>';
leftArrow.classList = 'leftArrow';

// append the Arrows created into main slider box
mainSliderBox.appendChild(rightArrow);
mainSliderBox.appendChild(leftArrow);

// hide the left arrows
leftArrow.style.display = 'none';

// if the right arrow onclick
rightArrow.onclick = function(){
  mainSliderBox.style.direction = 'ltr';
  sliderBoxs[i].classList.remove('activeSlide');
  sliderBoxs[i].style.animation = 'fadeOut 1s 1';
  sliderBoxs[i+1].classList.add('activeSlide');
  sliderBoxs[i+1].style.animation = 'fadeIn 1s 1';
  i++;
  
  if(i == sliderBoxs.length - 1){
    rightArrow.style.display = 'none';
  } else {
    leftArrow.style.display = 'block';
  }
};

// if the left arrow onclick
leftArrow.onclick = function(){
  mainSliderBox.style.direction = 'rtl';
  sliderBoxs[i].classList.remove('activeSlide');
  sliderBoxs[i].style.animation = 'fadeOut 1s 1';
  sliderBoxs[i-1].classList.add('activeSlide');
  sliderBoxs[i-1].style.animation = 'fadeIn 1s 1';
  i--;
  
  if(i == 0){
    leftArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'block';
  }
};