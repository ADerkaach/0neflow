$(function () {

  $(".menu a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

    $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });
  $('.slider__items').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
  $('.about-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
  $('.footer-top__title--special').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('active');
  });

})