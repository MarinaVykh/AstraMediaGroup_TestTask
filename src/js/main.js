// function clickLink() {
//   var links = document.getElementsByClassName('main-nav__item-menu');
//
//   for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', request);
//   }
// }
//
// clickLink();

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

// function extractContent(a) {
//   var htmlString = a;
//
//   var beginningContent = htmlString.indexOf("//contentStart") + "//contentStart".length;
//   var endContent = htmlString.indexOf("//contentEnd");
//   var extractedContent = htmlString.substr(beginningContent, endContent - beginningContent).trim();
//
//   return extractedContent;
//
// }

// function addContent() {
//   var links = document.getElementsByClassName('main-nav__item-menu');
//
//   for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function (event) {
//
//       var blocks = document.getElementsByClassName('main-nav__item');
//       for (var i = 0; i < blocks.length; i++) {
//         var doesContainElement = blocks[i].contains(event.target);
//         if (doesContainElement == false) {
//           blocks[i].style.display = 'none';
//           document.body.style.position = 'static';
//           //document.querySelector('.main-nav__list').removeChild(blocks[i]);
//
//         } else {
//           blocks[i].style.order = '-1'
//         };
//       }
//     });
//   }
// }
//
// addContent();


$(document).ready(function () {
  $('.main-nav__item').click(function () {
    $(".main-nav__item:not(this)").css({"display": "none"});
    $(this).css({"display": "block"});
    var url = $(this).children("a").attr("href");
    $.ajax({
      url: url,
      success: function (data) {
        $("#content").html(data);
        $("#content").css({"display": "block"});
      }
    });

    if (url != $(window.location).attr("href")) {
      window.history.pushState(null, null, url);
    }
    return false;
  });


  $(window).bind("popstate", function () {
    $.ajax({
      url: location.pathname,
      success: function () {
        $("#content").css({"display": "none"});
        $(".main-nav__item:not(this)").css({"display": "block"});
      }
    });
  });
});


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
