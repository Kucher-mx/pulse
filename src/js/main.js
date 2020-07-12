$(document).ready(function(){
  $('.carousel_screen').slick({
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow_l.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow_r.png" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 5000,  
  });

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

});