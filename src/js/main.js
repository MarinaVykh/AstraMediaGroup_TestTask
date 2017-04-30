//наведение курсора на логотип и последующая смена цвета макета
// $('.logo').mouseenter(function () {
//
//   var arrColor = ["#1a48a6", "#a71b3b", "#a6781a", "#1ba768"];
//   var randColor = Math.floor(Math.random() * arrColor.length);
//
//   var color = arrColor[randColor];
//   console.log(color);
//
//   $('.page-footer').css({"background-color": color});
//
//   $('.main-nav__item-name').css({"background-color": color});
//
//   $('.logo').mouseout(function () {
//     $('.page-footer').css({"background-color": this.color});
//     $('.main-nav__item-name').css({"background-color": this.color});
//   });
// });

//
// function clickLink() {
//   var links = document.getElementsByClassName('main-nav__item-menu');
//
//   for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', request);
//   }
// }
//
// //clickLink();
//
// function request() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', './content1.html', true);
//   xhr.addEventListener('load', function () {
//     if (xhr.status != 200) {
//       alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
//     } else {
//       var content = xhr.responseText;
//     }
//
//     //alert(extractContent(content));
//
//
//   });
//   xhr.send();
// }
//
//
// function extractContent(a) {
//   var htmlString = a;
//
//   var beginningContent = htmlString.indexOf("//content1Start") + "//content1Start".length;
//   var endContent = htmlString.indexOf("//content1End");
//   var extractedContent = htmlString.substr(beginningContent, endContent - beginningContent).trim();
//
//   return extractedContent;
//
// }


var links = document.getElementsByClassName('main-nav__item-menu');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (event) {

    var flippers = document.getElementsByClassName('main-nav__item-wrapper-flipper');
    for (var i = 0; i < links.length; i++) {
      var doesContainElement = flippers[i].contains(event.target);
      if (doesContainElement == false) {
        flippers[i].style.display = 'none';
        document.body.style.position = 'static';
      }
    }

  });
}


// var block = document.getElementById('b1');
//
// document.getElementById('b1').onclick = function(event) {
//   var target = event.target;
//
//
// target.style.display='none';
//
// }


// var links = document.getElementsByClassName('main-nav__item-menu');
//
// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function () {
//
//
//     var t = document.getElementsByClassName('main-nav__item-wrapper-flipper');
//     for (var i = 0; i < links.length; i++) {
//       t[i].style.display = 'none';
//       document.body.style.position = 'static';
//     }
//
//   });
// }


