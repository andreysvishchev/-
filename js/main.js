$(function() {
  $('.carpark__slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        dots: true
      }
    }, ]
  });

  $('.menu__btn, .menu a').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".menu__list-link, .footer__list-link").on("click", function(e) {

    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(".rate").rateYo({
    starWidth: "15px",
    normalFill: "#fbfbfb",
    ratedFill: "#FF352B",
    readOnly: true
  });

  $(".carpark__filter-item").click(function(e) {
    $(".carpark__filter-item").removeClass('carpark__filter-item--active');
    $(this).addClass('carpark__filter-item--active');
  });

  $(".btn-one").click(function() {
    $(".slider-one").addClass("carpark__slider--active");
  });

  $(".btn-two").click(function() {
    $(".slider-two").addClass("carpark__slider--active");
  });

  $(".btn-three").click(function() {
    $(".slider-three").addClass("carpark__slider--active");
  });

  $(".btn-one").click(function() {
    $(".slider-two, .slider-three").removeClass("carpark__slider--active");
  });

  $(".btn-two").click(function() {
    $(".slider-one, .slider-three").removeClass("carpark__slider--active");
  });

  $(".btn-three").click(function() {
    $(".slider-one, .slider-two").removeClass("carpark__slider--active");
  });

});