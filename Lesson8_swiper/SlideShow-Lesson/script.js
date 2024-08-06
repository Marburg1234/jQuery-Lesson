const swiper = new Swiper('.swiper',{

  loop: true, //最後までスライドしたら最初の画面に戻る設定

  pagination: {
    el: 'swiper-pagination',
  },

  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  }
});