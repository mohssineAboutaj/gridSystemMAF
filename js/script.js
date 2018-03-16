// clear Placholder
document.querySelectorAll('input').forEach(function(myInput){
  // clear Placholder on focus
  myInput.addEventListener("focus",function(){
    this.setAttribute('data-holder',this.getAttribute('placeholder'));
    this.setAttribute('placeholder','');
  });

  // restore Placholder on blur
  myInput.addEventListener("blur",function(){
    this.setAttribute('placeholder',this.getAttribute('data-holder'));
    this.setAttribute('data-holder','');
  });
},this);

// add star aside required inputs
document.querySelectorAll('input,textarea').forEach(function(myInput){
  if (myInput.hasAttribute('required','required')) {
    myInput.parentElement.style.position = 'relative';
    var req = document.createElement('span');
    req.style.position = 'absolute';
    if(window.innerWidth <= 768){ req.style.top = '20px'; }
    req.style.top = '5px';
    req.style.right = '8px';
    req.style.color = 'red';
    req.style.fontSize = '1.7em';
    req.innerHTML = '*';
    myInput.parentElement.appendChild(req);
  }
},this);

// confirm are you sure
document.querySelectorAll('.confirm').forEach(function(confirmBtn) {
  confirmBtn.addEventListener("click",function(){
    return confirm('Are you sure you want to '+ confirmBtn.textContent +' ?');
  });
}, this);

// function to add Class Active on active link
function addClassActive(box, elements, className){
  var link = document.querySelector(box).querySelectorAll(elements),
      i;

  for (i = 0; i < link.length; i++) {
    link[i].onclick = function(){
      for (i = 0; i < link.length; i++) {
        link[i].classList.remove(className);
      }
    this.classList.add(className);
  };}
}
addClassActive('.navbar', 'a', 'active');

// aside-nenu
var btnMenu = document.querySelector('.btn-menu'),
    asideMenu = document.querySelector('.aside-menu');

if (btnMenu) {
  btnMenu.addEventListener("click",function(){
    asideMenu.classList.toggle('hide');
  });
}

// navigation Bar show or hidden by the click
var navbtn = document.querySelector('.nav-btn'),
    navbar = document.querySelector('.navbar');

navbtn.onclick = function(){
  if(navbar.style.height === '100%'){
    navbar.style.height = '0%';
  } else {
    navbar.style.height = '100%';
  }
};

if (window.innerWidth < 992) {
  navbar.querySelectorAll('a').forEach(function(link) {
    link.addEventListener("click",function(){
      navbar.style.height = '0%';
      navbtn.innerHTML = '&equiv;';
    });
  }, this);
  // function to munis the height of navbar to first h1 in page
  if (document.querySelector('.nav')) {
    document.body.firstElementChild.style.marginTop = document.querySelector('nav').clientHeight + 'px';
  }
}

// Show or hidden the navbar button in mini-screens
function displayMiniNavbar(){
  if (window.innerWidth < 992) {
    navbar.style.height = '0%';
  } else {
    navbar.style.height = '100%';
    navbtn.innerHTML = '&equiv;';
  }
}

// custom the input file
if (document.querySelector('.input-file')) {
  var inputFile = document.querySelector('.input-file'),
      customInputFile = document.createElement('span');
  inputFile.style.visibility = 'hidden';
  customInputFile.style.backgroundColor = '#4B77BE';
  customInputFile.style.display = 'block';
  customInputFile.style.width = '90%';
  customInputFile.style.position = 'absolute';
  customInputFile.style.top = '1px';
  customInputFile.style.left = '5px';
  customInputFile.style.bottom = '1px';
  customInputFile.style.color = '#fff';
  customInputFile.style.textAlign = 'center';
  customInputFile.style.borderRadius = '5px';
  customInputFile.style.padding = '7px';
  customInputFile.innerHTML = '<i class="fa fa-upload"></i> upload';
  customInputFile.onclick = function(){inputFile.click();}
  // append the custom input file on parent input
  inputFile.parentElement.appendChild(customInputFile);
  // check if the input empty , if true change the icon
  inputFile.onchange = function(){
    customInputFile.innerHTML = 
      '<i class="fa fa-check"></i> upload <u style="font-size: .5em">' +
      inputFile.value + '</u>';
  };
}

// progress bar
var progressContainer = document.querySelectorAll('.progress'),
    i;

if (progressContainer) {
  for(i = 0;i < progressContainer.length;i++){
    progressContainer[i].querySelector('span').style.width =
      progressContainer[i].querySelector('span').getAttribute('progress-value');
  }
}

// accordion function
function accordion(accordionButtons, accordionContent, accordionClassActive){
  var btn = document.querySelectorAll(accordionButtons),
      content = document.querySelectorAll(accordionContent),
      i;
  if(btn && content){
    document.querySelector('.accordion div[data-target="#collapseOne"]').classList.add('active-acc');
    for (i = 0; i < btn.length; i++) {
      content[i].classList.add('hide');
      content[0].classList.remove('hide');
      btn[i].onclick = function(){
        for (i = 0; i < btn.length; i++) {
          btn[i].classList.remove(accordionClassActive);
          content[i].classList.add('hide');
        }
        this.classList.add(accordionClassActive);
        document.querySelector('div' + this.getAttribute('data-target')).classList.toggle('hide');
      };
    }
  } else {
    return 0;
  }
}

accordion('div.accordion-heading','div[data-parent="#accordion"]','active-acc');

// loading function
window.onload = function(){
  var loadingMAF = document.querySelector('.loadingMAF');
  if (loadingMAF){
    loadingMAF.style.display = 'none';
  }
};