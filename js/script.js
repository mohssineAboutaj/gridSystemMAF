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

// function to munis the height of navbar to first h1 in page
document.querySelector('h1').style.marginTop = document.querySelector('nav').clientHeight + 'px';

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
    return confirm("Are you sure you want to "+ confirmBtn.textContent +" ?");
  });
}, this);

/*
document.querySelectorAll('a').forEach(function(confirmBtn) {
  confirmBtn.addEventListener("click", function(e){
  e.preventDefault();
    return confirm("Are you sure you want to "+ confirmBtn.textContent +" ?") ? location.href = confirmBtn.getAttribute('href') : null;
  });
}, this);
*/

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

// add-new btn
function btnAddNew(btnName){
  var addNew = document.querySelector(btnName);
  if(document.body.clientHeight <= window.innerHeight){
      addNew.style.display = 'none';
  } else {
      addNew.style.display = 'block';
  }
}

// navigation Bar show or hidden by the click
var navbtn = document.querySelector('.nav-btn'),
    navbar = document.querySelector('.navbar');

navbtn.onclick = function(){
  if(navbar.style.height === '100%'){
    navbar.style.height = '0%';
    navbtn.innerHTML = '&equiv;';
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

// live preview
function livePreview(theInput, theOutput){
  var myInput = document.querySelector(theInput),
      myOutput = document.querySelector(theOutput);
  function inputOutput() {
    myOutput.innerHTML = this.value;
  }

  myInput.onkeyup = inputOutput;
  myInput.onblur = inputOutput;
}
if (document.querySelector('.live-preview')) {
  livePreview('#name','h3');
  livePreview('#desc','p');
  livePreview('#price','.price');
}

/*setInterval(function(){
  document.getElementById('img').src = '<?php echo basename( ?>' +
    document.querySelector('input[type="file"]').value + '<?php echo ) ?>';
}, 500);*/

// change profile img
function changeImg(){
  document.querySelector('.change-img').click();
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