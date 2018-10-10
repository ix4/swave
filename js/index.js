//DOM ELEMENTS
const elements = {
  loader: document.querySelector('.loading'),
  menuFive: document.querySelector('.menuFive'),
  navBar: document.querySelector('.nav'),
  menuBg: document.querySelector('.nav__menu'),
  optionsMenu: document.querySelector('.nav__options'),
  path: document.querySelector('#wave'),
  animation: document.querySelector('#moveTheWave'),
  headingTitle: document.querySelector('.heading-primary'),
  sectionAbout: document.querySelector('.about'),
  aboutpics: document.querySelector('.pic__wave'),
  wavepic1 : document.querySelector('.pic__wave-1'),
  wavepic2 : document.querySelector('.pic__wave-2'),
  wavepic3 : document.querySelector('.pic__wave-3'),
  sectionSchool : document.querySelector('.surfschool'),
  sectionStore: document.querySelector('.surfstore'),
  sectionProperties : document.querySelector('.properties'),
  footer: document.querySelector('.footer'),

};

elements.footer.style.opacity = 0;

function noscroll() {
  window.scrollTo( 0, 0 );
}
//  disable scroll
window.addEventListener('scroll', noscroll);

// LOADING PANEL
const m = 0.512286623256592433;

function buildWave(w, h) {

  const a = h / 4;
  const y = h / 2;

  const pathData = [
    'M', w * 0, y + a / 2,
    'c',
      a * m, 0,
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,

    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a,
    's',
      -(1 - a) * m, a,
      a, a,
    's',
      -(1 - a) * m, -a,
      a, -a
  ].join(' ');

  elements.path.setAttribute('d', pathData);
}

buildWave(90, 60);

//WHEN PAGE IS READY

document.addEventListener("DOMContentLoaded",function(){
  // Remove listener to disable scroll
  window.removeEventListener('scroll', noscroll);


  let menuState = false;

  //Hide loading animation
  elements.loader.classList.toggle('display-none');
  elements.headingTitle.classList.toggle('slide-left');


  function addClassFunFive() {
    this.classList.toggle("clickMenuFive");
    if (menuState){
      elements.optionsMenu.classList.toggle('display-none');
      elements.menuBg.style.transform = "none";
      menuState = false;
    } else {
      elements.optionsMenu.classList.toggle('display-none');
      elements.menuBg.style.transform = "scale(400)";
      menuState = true;
    }

    changeNavbarColor();

  }

  elements.menuFive.addEventListener('click', addClassFunFive);

  //Scroll functions
  function GetZoomFactor () {
    var factor = 1;
    if (document.body.getBoundingClientRect) {
    // rect is only in physical pixel size in IE before version 8
      var rect = document.body.getBoundingClientRect ();
      var physicalW = rect.right - rect.left;
      var logicalW = document.body.offsetWidth;

      // the zoom level is always an integer percent value
      factor = Math.round ((physicalW / logicalW) * 100) / 100;
      }
      return factor;
    }

  function GetScrollPositions () {
    if ('pageXOffset' in window) {  // all browsers, except IE before version 9
      var scrollLeft =  window.pageXOffset;
      var scrollTop = window.pageYOffset;
    }
    else {      // Internet Explorer before version 9
      var zoomFactor = GetZoomFactor ();
      var scrollTop = Math.round (document.documentElement.scrollTop / zoomFactor);
    }

      alert("The current vertical scroll amount: " + scrollTop + "px");
  }


  var last_known_scroll_position = 0;
  var ticking = false;

  function changeNavbarColor(scroll_pos) {
    if (scroll_pos > 100){
      elements.navBar.style.height = '8vh';
      elements.navBar.style.backgroundColor = '#171717';
    } else if (scroll_pos < 100 || menuState == true){
      elements.navBar.style.backgroundColor = 'transparent';
      elements.navBar.style.height = '10vh';
    }

    if (menuState == true){
      window.addEventListener('scroll', noscroll);
    } else {
      window.removeEventListener('scroll', noscroll);
    }
  }

  function elementsFadeIn(scroll_pos){
    //About
    if (getElPosition(elements.sectionAbout) <= 500){
      changeOpacity('.about');
      elements.wavepic1.style.top = '0px';
      elements.wavepic2.style.top = '-7rem';
      elements.wavepic3.style.top = '3rem';
    }

    //School
    if (getElPosition(elements.sectionSchool) <= 500){
      changeOpacity('.ss');
    }

    //Store
    if (getElPosition(elements.sectionStore) <= 200){
      changeOpacity('.st');
      elements.footer.style.opacity = 1;
    }

    //Properties
    if (getElPosition(elements.sectionProperties) <= 200){
      changeOpacity('.pp');
    }
  }

  function changeOpacity(className) {
    document.querySelectorAll(className).forEach(el => {
        el.style.opacity = 1;
        el.style.left = 0;
    })
}

  function getElPosition( element ) {
   var rect = element.getBoundingClientRect();
   return rect.top;
}

  window.addEventListener('scroll', function(e) {

    last_known_scroll_position = window.scrollY;

    if (!ticking) {

      window.requestAnimationFrame(function() {
        changeNavbarColor(last_known_scroll_position);
        elementsFadeIn(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;

    }

  });

});
