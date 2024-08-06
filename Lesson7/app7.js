// それぞれの要素をクリックしたときにslideUpされるように設定する
// それぞれの要素に個別でアニメーションを設定
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// thisを使用して、上のアニメーションをまとめて記述できるようにする
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});
