$(function () {
  'use strict';
  $(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  })
})


$(function () {
  'use strict';
  //
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
    $('.slider').height(winH - ( upperH + navH));

});


var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 800
});
var myFeatures = document.getElementById('#features');


scroll.animateScroll(myFeatures)
