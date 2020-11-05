
$(function(){
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = -300;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }

    $('.header_nav').stop().animate({
      right: rightVal
    }, 200);
  });
});

$(function () {
  var headerHight = 200; //ヘッダの高さ
  $('a[href^="#"]').click(function(){
      var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top-headerHight;
      $("html, body").animate({scrollTop:position}, 550, "swing");
         return false;
    });
 });

 $('.modal_img1').click(function(){
  $('.modal_1').fadeIn();
  $('.overlay').fadeIn();
});
$('.close, .overlay, .dli-close').click(function(){
  $('.modal_1').fadeOut();
  $('.overlay').fadeOut();
});

$('.modal_img2').click(function(){
  $('.modal_2').fadeIn();
  $('.overlay').fadeIn();
});
$('.close, .overlay, .dli-close').click(function(){
  $('.modal_2').fadeOut();
  $('.overlay').fadeOut();
});



$('.modal_img3').click(function(){
  $('.modal_3').fadeIn();
  $('.overlay').fadeIn();
});
$('.close, .overlay, .dli-close').click(function(){
  $('.modal_3').fadeOut();
  $('.overlay').fadeOut();
});


$('.modal_img4').click(function(){
  $('.modal_4').fadeIn();
  $('.overlay').fadeIn();
});
$('.close, .overlay, .dli-close').click(function(){
  $('.modal_4').fadeOut();
  $('.overlay').fadeOut();
});


$('.modal_img5').click(function(){
  $('.modal_5').fadeIn();
  $('.overlay').fadeIn();
});
$('.close, .overlay, .dli-close').click(function(){
  $('.modal_5').fadeOut();
  $('.overlay').fadeOut();
});