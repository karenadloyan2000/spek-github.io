$('.close-menu').click(function () {
  $('.maneu-mobile').animate({
    width: '0',
  });
});
$('.burger-menu').click(function () {
  $('.maneu-mobile').animate({
    width: '100%',
  });
});

$('.slider1').owlCarousel({
  loop: true,
  // margin:10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    400: {
      items: 2,
      dots: true,
    },
    600: {
      items: 3,
      dots: true,
    },
    1000: {
      items: 5,
      dots: true,
    },
  },
});
$('.tab-block:first').show();
$('.button-tab').click(function () {
  index = $(this).index();
  $('.tab-block').hide();
  $('.tab-block').hide().eq(index).show();
});

$('.button-tab').click(function () {
  $('.button-tab-chek').removeClass('button-tab-chek');
  $(this).addClass('button-tab-chek');
});

$('.comments-slider').owlCarousel({
  loop: true,
  // margin:10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    400: {
      items: 1,
      dots: true,
    },
    600: {
      items: 1,
      dots: true,
    },
    1000: {
      items: 2,
      dots: true,
    },
  },
});
