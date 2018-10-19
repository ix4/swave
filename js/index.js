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
  var storeElements = {
    sections : [
      section1 = [document.querySelector('.s1__content'), '.s-1'],
      section2 = [document.querySelector('.s1__map'), '.s-1'],
    ],
    map : document.getElementById('map')
  }

  var propertiesElements = {
    sections: [
      section1 = [document.querySelector('.s1__content'), '.s-c'],
      section2 = [document.querySelector('.s1__properties'), '.s-1']
    ],
    closeBtn : [document.querySelector('.popup__close')],
    properties : [document.querySelector('.s1__properties')],
    property : [document.querySelectorAll('.property')],
    popup : [document.querySelector('.popup')],
    popupImg : document.querySelector('.popup__image'),
    popupTitle : document.querySelector('.popup__title'),
    popupDesc : document.querySelector('.popup__description'),
    popupDistance: document.querySelector('.feature__distance'),
    popupAdults: document.querySelector('.feature__adults'),
    popupPrice: document.querySelector('.feature__price'),
    popupArea: document.querySelector('.feature__area')
  }

  var contactElements = {
    sections: [
      section1 = [document.querySelector('.contacts'), '.s-c']
    ],
    map : document.getElementById('map')
  }

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

    updatePopup : function(info){
      propertiesElements.popupTitle.innerHTML = info.name;
      propertiesElements.popupDesc.innerHTML = info.description;
      propertiesElements.popupImg.style.backgroundImage = `url(${info.photo})`;
      propertiesElements.popupDistance.innerHTML = info.distance;
      propertiesElements.popupAdults.innerHTML = info.adults;
      propertiesElements.popupPrice.innerHTML = info.price;
      propertiesElements.popupArea.innerHTML = info.area;
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

  class House {
    constructor(name, description, photo, distance, adults, price, area){
      this.name = name;
      this.description = description;
      this.photo = photo;
      this.distance = distance;
      this.adults = adults;
      this.price = price;
      this.area = area;
    }
  };

  var house1 = new House('The Cozy Cottage',
  'A beautiful house by the beach where you can breath in fresh air and listen to the waves.',
  '../../img/house1.jpg',
  '500m',
  '3',
  '50€/night',
  '450m'
);

var house2 = new House('The Cozy Cottage',
  ' A beautiful house by the beach where you can breath in fresh air and listen to the waves.',
  '../../img/house2.jpg',
  '500m',
  '3',
  '50€/night',
  '450m'
);

var house3 = new House('The Cozy Cottage',
  'A beautiful house by the beach where you can breath in fresh air and listen to the waves.',
  '../../img/house3.jpg',
  '500m',
  '3',
  '50€/night',
  '450m'
);

var house4 = new House('The Cozy Cottage',
  'A beautiful house by the beach where you can breath in fresh air and listen to the waves.',
  '../../img/house4.jpg',
  '500m',
  '3',
  '50€/night',
  '450m'
);

var house5 = new House('The Cozy Cottage',
  'A beautiful house by the beach where you can breath in fresh air and listen to the waves.',
  '../../img/house5.jpg',
  '500m',
  '3',
  '50€/night',
  '450m'
);

var house6 = new House('The Cozy Cottage',
  'A beautiful house by the beach where you can breath in fresh air and listen to the waves.',
  '../../img/header_propertie.jpg',
  '500m',
  '3',
  '50€/night',
  '450m'
);


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



    getHouse : function (number){
      if (number == 1) {
        return house1;
      } else if (number == 2){
        return house2;
      } else if (number ==3){
        return house3;
      } else if (number ==4){
        return house4;
      } else if (number ==5){
        return house5;
      } else if (number ==6){
        return house6;
      }
    },

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

  var initMap = function(){
    //Location
    var titahi = {lat: -41.105099 , lng: 174.836385 };

    //Create map
    var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: titahi});

      //Marker
      var marker = new google.maps.Marker({position: titahi, map: map});
    };

  var onTogglePopup = function(number){
    //1. Get Elements
    var domEl = viewCtrl.getPath();

    if (number && typeof(number) === 'string'){
      console.log('ay');
      console.log(number);
      //2. Get number
      var num = number.replace(/\D/g, "");

      //3. Get Information
      var info = modelCtrl.getHouse(num);
      console.log(info);

      //4. Write Information on UI
      viewCtrl.updatePopup(info);
    }

    //3. Show/Hide Popup
    domEl.popup[0].classList.toggle('popup-target');

  };

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
        //2.1 If reached, change opacity
        viewCtrl.changeOpacity(cur[1], 1);

        // 2.2 Check if it is About Section or storeSection
        if (cur[1] == '.about') {
          domEl.wavepic1.style.transform = 'translateY(0)';
          domEl.wavepic2.style.transform = 'translateY(-7rem)';
          domEl.wavepic3.style.transform = 'translateY(3rem)';
        } else if (cur[1] == '.st' || cur[1] == '.s-1') {
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

  var setupEventListeners = function(){
    var DOM = viewCtrl.getElements();
    var domEl = viewCtrl.getPath();
    //console.log(domEl.closeBtn[0]);

    //1. On Page Load
    document.addEventListener("DOMContentLoaded", pageLoaded);
    // 2. Check if scroll is happening
    window.addEventListener('scroll', scrollAct);
    // 3. Check if Menu got Clicked;
    DOM.menuFive.addEventListener('click', onClickMenu);

    // 4. Properties Clicked
    if (domEl.properties){
      domEl.properties[0].addEventListener('click', e => {
        const btn = e.target.closest('.property');
        if (btn) {
          onTogglePopup(e.target.classList[1]);
        }
      });

      domEl.popup[0].addEventListener('click', e => {
        if (e.target.id == 'popup') {
          onTogglePopup();
        }
      })

      domEl.closeBtn[0].addEventListener('click', onTogglePopup);
    }
    // 4. Avoid Scroll
    window.addEventListener('scroll', noscroll);
  };

  var noscroll = function() {
    window.scrollTo(last_known_scroll_position, 0 );
  };

  var pageLoaded = function(){
    var domEl = viewCtrl.getPath();
    var DOM = viewCtrl.getElements();
    // 1. Allow Scroll
    window.removeEventListener('scroll',noscroll);

    // 2. Hide Loader
    DOM.loader.classList.toggle('display-none');

    // 3. Slide Heading
    if (DOM.headingTitle){
    DOM.headingTitle.classList.toggle('slide-left');
  }

    //5. Load map
    if (domEl.map){
      initMap();
    }
  };

  return {
    init: function(){
      // 1. Get DOM Strings
      var domEl = viewCtrl.getPath();
      var DOM = viewCtrl.getElements();

      // 2. Start Events
      setupEventListeners();

      // 3. Hide footer
      if(DOM.footer){
      viewCtrl.elementOpacity(DOM.footer, 0);
      }

      // 4. Wave of Loader
      modelCtrl.buildWave(90, 60, DOM);


    }

  }

})(modelCtrl, viewCtrl);

appCtrl.init();
