$(document).ready(function () {
  $('.partner__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.user .user__button').on('click', function () {
    var userRow = $('.user .user__row');
    var userRowVisible = $('.user .user__row--visible');
    if(userRow.length > userRowVisible.length) {
      userRow.eq(userRowVisible.length++).addClass('user__row--visible');
    }
  });

  $('.modal-link').on('click', function (e) {
    e.preventDefault();
    $('.modal-window').fadeIn('fast').css('display', 'flex');
  });

  $('.modal-close').on('click', function () {
    $('.modal-window').fadeOut('fast');
  });

  var investDots = $('.invest__dots .dot');
  investDots.eq('0').on('click', function () {
    $('.home__invest__title').html('pre-ICO');
    investDots.removeClass('active');
    $(this).addClass('active');
  });

  investDots.eq('1').on('click', function () {
    $('.home__invest__title').html('Closed pre-ICO');
    investDots.removeClass('active');
    $(this).addClass('active');
  });
  
  investDots.eq('2').on('click', function () {
    $('.home__invest__title').html('ICO');
    investDots.removeClass('active');
    $(this).addClass('active');
  });

  $('.slider-arrow--left').on('click', function() {
    var number = $('.why-slider-number').html();
    number = +number - 1;
    if (number < 1) {
      number = 4;
      $('.why-slider-number').html(number);
      if (number == 2) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-3').addClass('why-ico__item--visible');
        $('.why-ico .item-4').addClass('why-ico__item--visible');
      } else if (number == 3) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-5').addClass('why-ico__item--visible');
        $('.why-ico .item-6').addClass('why-ico__item--visible');
      } else if (number == 4) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-7').addClass('why-ico__item--visible');
        $('.why-ico .item-8').addClass('why-ico__item--visible');
      } else if (number == 1) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-1').addClass('why-ico__item--visible');
        $('.why-ico .item-2').addClass('why-ico__item--visible');
      }
    } else {
      $('.why-slider-number').html(number);
      if (number == 2) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-3').addClass('why-ico__item--visible');
        $('.why-ico .item-4').addClass('why-ico__item--visible');
      } else if (number == 3) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-5').addClass('why-ico__item--visible');
        $('.why-ico .item-6').addClass('why-ico__item--visible');
      } else if (number == 4) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-7').addClass('why-ico__item--visible');
        $('.why-ico .item-8').addClass('why-ico__item--visible');
      } else if (number == 1) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-1').addClass('why-ico__item--visible');
        $('.why-ico .item-2').addClass('why-ico__item--visible');
      }
    }
  });

  $('.slider-arrow--right').on('click', function () {
    var number = $('.why-slider-number').html();
    number = +number + 1;
    if(number > 4) {
      number = 1;
      $('.why-slider-number').html(number);
      if (number == 2) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-3').addClass('why-ico__item--visible');
        $('.why-ico .item-4').addClass('why-ico__item--visible');
      } else if (number == 3) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-5').addClass('why-ico__item--visible');
        $('.why-ico .item-6').addClass('why-ico__item--visible');
      } else if (number == 4) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-7').addClass('why-ico__item--visible');
        $('.why-ico .item-8').addClass('why-ico__item--visible');
      } else if (number == 1) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-1').addClass('why-ico__item--visible');
        $('.why-ico .item-2').addClass('why-ico__item--visible');
      }
    } else {
      $('.why-slider-number').html(number);
      if(number == 2) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-3').addClass('why-ico__item--visible');
        $('.why-ico .item-4').addClass('why-ico__item--visible');
      } else if(number == 3) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-5').addClass('why-ico__item--visible');
        $('.why-ico .item-6').addClass('why-ico__item--visible');
      } else if(number == 4) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-7').addClass('why-ico__item--visible');
        $('.why-ico .item-8').addClass('why-ico__item--visible');
      } else if(number == 1) {
        $('.why-ico .why-ico__item').removeClass('why-ico__item--visible');
        $('.why-ico .item-1').addClass('why-ico__item--visible');
        $('.why-ico .item-2').addClass('why-ico__item--visible');
      }
    }
  });
});