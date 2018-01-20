/*
    >>>> INFO <<<<
    * Project Name         : scrollTopMAF
    * version              : v1.0
    * Date of Construction : 30/10/2017
    * Project Description  : Button scroll to top
    * Athour               : Mohssine Aboutaj
    * Country-City         : Morocco-Marrakech
    * Language use         : javaScript
    * Licence              : Free & Available to everyone
*/


// create scrollingBtn
var scrollingBtn = document.createElement('div');

// add some Css property in scrollingBtn
scrollingBtn.textContent = '^';
scrollingBtn.style.position = 'fixed';
scrollingBtn.style.bottom = '10px';
scrollingBtn.style.right = '10px';
scrollingBtn.style.width = '30px';
scrollingBtn.style.height = '30px';
scrollingBtn.style.textAlign = 'center';
scrollingBtn.style.fontSize = '30px';
scrollingBtn.style.zIndex = '9999';
scrollingBtn.style.backgroundColor = '#888';
scrollingBtn.style.color = '#ccc';
scrollingBtn.style.borderRadius = '50%';
scrollingBtn.style.opacity = '0.8';
scrollingBtn.style.transition = 'all 0.5s';
scrollingBtn.style.cursor = 'pointer';

// add events to scrollingBtn
scrollingBtn.onmouseover = function(){
  this.style.backgroundColor = '#ccc';
  this.style.color = '#888';
  this.style.opacity = '1';
};

scrollingBtn.onmouseout = function(){
  this.style.backgroundColor = '#888';
  this.style.color = '#ccc';
  this.style.opacity = '0.8';
};

scrollingBtn.onclick = function(){
    window.scrollTo(0,0);
};

// check the offSet of page
function checkTheOffSet(){
  if(pageYOffset < window.innerHeight){
      scrollingBtn.style.display = 'none';
  } else {
      scrollingBtn.style.display = 'block';
  }
}

checkTheOffSet();
window.onscroll = checkTheOffSet;

// append the scrollingBtn to body
document.body.appendChild(scrollingBtn);