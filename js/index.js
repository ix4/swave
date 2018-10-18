//UI
var viewCtrl = (function (){

  var homeElements = {
    sections: [
      sectionAbout = [document.querySelector('.about'), '.about'],
      sectionSchool = [document.querySelector('.surfschool'), '.ss'],
      sectionStore = [document.querySelector('.surfstore'), '.st'],
      sectionProperties = [document.querySelector('.properties'), '.pp']
    ],
    aboutpics: document.querySelector('.pic__wave'),
    wavepic1 : document.querySelector('.pic__wave-1'),
    wavepic2 : document.querySelector('.pic__wave-2'),
    wavepic3 : document.querySelector('.pic__wave-3'),
  }

  var aboutElements = {
    sections: [
      section1 = [document.querySelector('.s1'), '.s-1'],
      section2 = [document.querySelector('.s2'), '.s-2'],
      section3 = [document.querySelector('.s3'), '.s-3'],
    ],
  }
  var schoolElements = {
    sections: [
      section1 = [document.querySelector('.s1__content'), '.s-c'],
      section2 = [document.querySelector('.s1__options-1'), '.s-1'],
      section3 = [document.querySelector('.s1__options-2'), '.s-2'],
      section4 = [document.querySelector('.s1__options-3'), '.s-3'],
    ]
  }
  var storeElements = {}
  var propertiesElements = {}
  var contactElements = {}

  var elements = {

    loader: document.querySelector('.loading'),
    menuFive: document.querySelector('.menuFive'),
    navBar: document.querySelector('.nav'),
    menuBg: document.querySelector('.nav__menu'),
    optionsMenu: document.querySelector('.nav__options'),
    path: document.querySelector('#wave'),
    animation: document.querySelector('#moveTheWave'),
    headingTitle: document.querySelector('.heading-primary'),
    footer: document.querySelector('.footer'),
  };

  return {
    getElements : function(){
      return elements;
    },

    getHomeElements : function(){
      return homeElements;
    },

    getAboutElements : function(){
      return aboutElements;
    },

    getSchoolElements : function(){
      return schoolElements;
    },

    getStoreElements : function(){
      return storeElements;
    },

    getPropertiesElements : function(){
      return propertiesElements;
    },

    getContactElements : function(){
      return contactElements;
    },

    getPath : function(){
      if ( window.location.pathname == '/about.html') {
        return viewCtrl.getAboutElements();
      } else if (window.location.pathname == '/school.html'){
        return viewCtrl.getSchoolElements();
      } else if (window.location.pathname == '/store.html'){
        return viewCtrl.getStoreElements();
      } else if (window.location.pathname == '/properties.html'){
        return viewCtrl.getPropertiesElements();
      } else if (window.location.pathname == '/contact.html'){
        return viewCtrl.getContactElements();
      } else {
        return viewCtrl.getHomeElements();
      }
    },

    changeOpacity : function(className) {
      document.querySelectorAll(className).forEach(el => {
        console.log(el);
        el.style.opacity = 1;
        el.style.transform = 'translateX(0)';
      })
    },

    changeNavbarColor: function(scroll_pos, menuState) {
      if (scroll_pos > 100){
        elements.navBar.classList.add('changeNav');
      } else if (scroll_pos < 100 || menuState == true){
        elements.navBar.classList.remove('changeNav');
      }
    },



    menuStateToggle : function(menuState) {
      if (menuState){
        elements.optionsMenu.classList.toggle('display-none');
        elements.menuBg.style.transform = "none";
        menuState = false;
        return menuState;
      } else {
        elements.optionsMenu.classList.toggle('display-none');
        elements.menuBg.style.transform = "scale(400)";
        menuState = true;
        return menuState;
      }

    },

    elementPos: function(element, pos, number) {
      if (pos === 'top'){
        element.style.transform = `translateY(${number})`;
      }
    },

    elementOpacity: function(element, val) {
      element.style.opacity = val;
    }

  }


})();

// MODEL
var modelCtrl = (function (){

  var GetZoomFactor = function() {
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

  return {

    checkIfScroll: function(e, ticking){
      return ticking;
    },

    //Detects what is the scroll position
    GetScrollPositions : function() {
      if ('pageXOffset' in window) {  // all browsers, except IE before version 9
        var scrollLeft =  window.pageXOffset;
        var scrollTop = window.pageYOffset;
      }
      else {      // Internet Explorer before version 9
        var zoomFactor = GetZoomFactor ();
        var scrollTop = Math.round (document.documentElement.scrollTop / zoomFactor);
      }

      alert("The current vertical scroll amount: " + scrollTop + "px");
    },

    buildWave: function(w, h, DOM) {
      const m = 0.512286623256592433;

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

      DOM.path.setAttribute('d', pathData);
    },

    getElPosition: function (element) {
      var rect = element.getBoundingClientRect();
      return rect.top;
    }
  }
})();

// CONTROLLER
var appCtrl = (function (){

  var last_known_scroll_position = 0;
  var ticking = false;
  var menuState = false;



  var toggleScroll = function(){
    if (menuState == true){
      window.addEventListener('scroll', noscroll);
    } else {
      window.removeEventListener('scroll', noscroll);
    }
  };

  var fadeInEl = function(scroll_pos, val, DOM, domEl){
    // 1. Get Element Position
    domEl.sections.forEach(function(cur){

      var secPos = modelCtrl.getElPosition(cur[0]);

      // 2. Check if scroll has reached
      if (secPos <= val) {
        console.log(cur);
        //2.1 If reached, change opacity
        viewCtrl.changeOpacity(cur[1], 1);

        // 2.2 Check if it is About Section or storeSection
        if (cur[1] == '.about') {
          domEl.wavepic1.style.transform = 'translateY(0)';
          domEl.wavepic2.style.transform = 'translateY(-7rem)';
          domEl.wavepic3.style.transform = 'translateY(3rem)';
        } else if (cur[1] == '.st' || cur[1] == '.s-2') {
          viewCtrl.elementOpacity(DOM.footer, 1);
        }
      }

    })
  };

  var scrollAct = function(){
    var DOM = viewCtrl.getElements();
    var domEl = viewCtrl.getPath();

    last_known_scroll_position = window.scrollY;
    // 1. Check if Scroll is Happening
    var scrollMode = modelCtrl.checkIfScroll(ticking);

    if (!scrollMode){
      window.requestAnimationFrame(function() {
        // 2. Change Navbar Appearance
        viewCtrl.changeNavbarColor(last_known_scroll_position, menuState);

        // 3. If on a new section, fade elements in
        fadeInEl(last_known_scroll_position, 500, DOM, domEl);
        ticking = false;
      });
    } else {
      ticking = true;
    }
  };

  var onClickMenu = function() {
    //1. Change Button State/Appearance
    this.classList.toggle("clickMenuFive");

    //2. Show Menu Options
    var menuUpdate = viewCtrl.menuStateToggle(menuState);
    menuState = menuUpdate;

    // 3. Change Navbar
    viewCtrl.changeNavbarColor(last_known_scroll_position, menuState);

    toggleScroll();
  };

  var setupEventListeners = function(DOM){
    var DOM = viewCtrl.getElements();

    //1. On Page Load
    document.addEventListener("DOMContentLoaded", pageLoaded);
    // 2. Check if scroll is happening
    window.addEventListener('scroll', scrollAct);
    // 3. Check if Menu got Clicked;
    DOM.menuFive.addEventListener('click', onClickMenu);
    // 4. Avoid Scroll
    window.addEventListener('scroll', noscroll);
  };

  var noscroll = function() {
    window.scrollTo(last_known_scroll_position, 0 );
  };

  var pageLoaded = function(){
    var DOM = viewCtrl.getElements();
    // 1. Allow Scroll
    window.removeEventListener('scroll',noscroll);

    // 2. Hide Loader
    DOM.loader.classList.toggle('display-none');

    // 3. Slide Heading
    DOM.headingTitle.classList.toggle('slide-left');
  };

  return {
    init: function(){
      // 1. Get DOM Strings
      var domEl = viewCtrl.getPath();
      var DOM = viewCtrl.getElements();

      // 2. Start Events
      setupEventListeners();
      // 3. Hide footer
      viewCtrl.elementOpacity(DOM.footer, 0);

      // 4. Wave of Loader
      modelCtrl.buildWave(90, 60, DOM);
    }

  }

})(modelCtrl, viewCtrl);

appCtrl.init();
