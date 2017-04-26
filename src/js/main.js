//наведение курсора на логотип и последующая смена цвета макета
$('.logo').mouseenter(function () {

  var arrColor = ["#1a48a6", "#a71b3b", "#a6781a", "#1ba768"];
  var randColor = Math.floor(Math.random() * arrColor.length);

  var color = arrColor[randColor];
  console.log(color);

  $('.page-footer').css({"background-color": color});

  $('.main-nav__item-name').css({"background-color": color});

  $('.logo').mouseout(function () {
    $('.page-footer').css({"background-color": this.color});
    $('.main-nav__item-name').css({"background-color": this.color});
  });
});
