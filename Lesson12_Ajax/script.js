// 取得したAPI_Keyをconst で指定した変数に格納する
const API_KEY = "e33b2a7820a3aded351f0cc92fc19d21";

// ボタンクリックしたときの処理を記述する
$(function(){
  $('#btn').on('click', function(){ //id名 btnのボタンがクリックされた時
// .ajaxはajaxを実装するメソッド　オプションとして、urlとdataTypeを指定してあげる
  $.ajax({
    // urlを指定してあげる。結合されるように設定 #citynameはHTMLでinputタグで指定している⇒ユーザーが入力した都市名が反映される仕組みを定義している
    url: "https://api.openweathermap.org/data/2.5/weather?q=t" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
    // 受け取りたいデータ型をdataTypeで指定している jsonp→JSONで受け取るの意味
    dataType : 'jsonp',
    }).done(function (data){
      // 通信成功
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data){
      // 通信失敗
      alert('通信に失敗しました');
    });
  });
});


// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "e33b2a7820a3aded351f0cc92fc19d21";

$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {
      //通信失敗
      alert('通信に失敗しました。');      });
  });
});