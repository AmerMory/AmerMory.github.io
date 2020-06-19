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

});

$(function () {

  "use strict";

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    peedAsDuration: true
  });

})
