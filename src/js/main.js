$(document).ready(function(){
  // carousel

  $('.carousel_screen').slick({
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow_l.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow_r.png" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 5000,  
  });

  //tabs

  $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
    $(this)
      .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
      .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
  });

  function toggle(item){
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog_content_item_main').eq(i).toggleClass('catalog_content_item_main_active');
        $('.catalog_content_item_list').eq(i).toggleClass('catalog_content_item_list_active');
      });
    });
  };

  toggle('.catalog_content_item_link');
  toggle('.catalog_content_item_list_back');

  //modal windows

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation ').fadeIn('slow');
  });

  $('.modal_closer').on('click', function() {
    $('.overlay, #consultation, #order, #tnx').fadeOut('slow');
  });

  $('.button_sm').on('click', function() {
    $('.overlay, #order ').fadeIn('slow');
  });

  $('.button_sm').each(function(i) {
    $(this).on('click',function(){
      $('#order .modal_descr').text($('.catalog_content_item_subheader').eq(i).text());
    });
  });

  //validation


  function validate_form(form){
    $(form).validate({
      rules: {
        name: "required",
        tel: {
          required: true,
          minlength: 6
        },
        mail: {
          required: true,
          email: true
        },
      },
      messages: {
        name: "Пожалуйста введите свое имя",
        tel: {
          required: "Пожалуйста введите свой номер телефона",
          minlength: jQuery.validator.format("Минимум {0} символов!")
        },
        mail: {
          required: "Нам нужен ваш E-mail чтобы связаться с вами",
          email: "Ваш E-mail должен быть в формате: name@domain.com"
        }
      }
    });
  };

  validate_form('#consultation_form');
  validate_form('#consultation form');
  validate_form('#order form');

  //masked phone

  $('input[name=tel]').mask("+380(99)999-9999")

  //submit

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #tnx').fadeIn('slow')

      $('form').trigger('reset');
    });
    return false;
  });

  //scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;

  });

  //WOW js init

  //new WOW().init(); 

});