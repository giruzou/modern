import $ from 'jquery';

var html = {
  index: require('./html/index.html')
};

var css = {
  fontAwesome: require('font-awesome/scss/font-awesome.scss'),
  style: require('./scss/style.scss')
};

$(function() {
  var flag = 1;

  /*
  :TODO topを押したときにページを差し替える
  */
  $('#area-top').hover(
    function(e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-top').css('color', 'rgb(51,199,247)');
    },
    function(e) {
      $(this).css('background', 'rgba(51,199,247,0.9)');
      $('#header-top').css('color', 'rgb(255,255,255)');
    }
  );

  $('#area-top').on('click', function () {
    flag = 1;
    $('#page-top').css('display', 'block');
    $('#page-about').css('display', 'none');
    $('#page-portfolio').css('display', 'none');
    window.scrollTo(0, 0);
    contentLinkReset();
  });

  /*
  :TODO aboutを押したときにページを差し替える
  */
  $('#area-about').hover(
    function(e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-about').css('color', 'rgb(223, 160, 200)');
    },
    function (e) {
      if (flag != 2) {
        $(this).css('background', 'rgba(223, 160, 200,0.9)');
        $('#header-about').css('color', 'rgb(255,255,255)');
      }
    }
  );
  $('#area-about').on('click', function () {
    flag = 2;
    $('#page-top').css('display', 'none');
    $('#page-about').css('display', 'block');
    $('#page-portfolio').css('display', 'none');
    window.scrollTo(0, 0);
    contentLinkReset();
    $(this).css('background', 'rgba(250,250,250,0.9)');
    $(this).children('p').css('color', 'rgb(223, 160, 200, 200)');
  });

  /*
  :TODO ポートフォリオを押したときにページを差し替える
  */
  $('#area-portfolio').hover(
    function(e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-portfolio').css('color', 'rgb(0,121,107)');
    },
    function (e) {
      if (flag != 3) {
        $(this).css('background', 'rgba(0,121,107,0.9)');
        $('#header-portfolio').css('color', 'rgb(255,255,255)');
      }
    }
  );

  $('#area-portfolio').on('click', function () {
    flag = 3;
    $('#page-top').css('display', 'none');
    $('#page-about').css('display', 'none');
    $('#page-portfolio').css('display', 'block');
    window.scrollTo(0, 0);
    contentLinkReset();
    $(this).css('background', 'rgba(250,250,250,0.9)');
    $(this).children('p').css('color', 'rgb(0,121, 107)');
  });

  /*
  :TODO ブログに飛ぶ
  */
  $('#area-blog').hover(
    function(e) {
      $(this).css('background', 'rgba(255,255,255,0.9)');
      $('#header-blog').css('color', 'rgb(175,180,43)');
    },
    function(e) {
      $(this).css('background', 'rgba(175,180,43,0.9)');
      $('#header-blog').css('color', 'rgb(255,255,255)');
    }
  );

  $('#area-blog').on('click', function() {
    window.open('https://yoshikawataiki.net/blog');
    $(this).css('background', 'rgba(175,180,43,0.9)');
    $('#header-blog').css('color', 'rgb(255,255,255)');
  });

});

function contentLinkReset() {
    $('.content-link').css('background', 'rgba(51,199,247,0.9)');
    $('.content-link').children('p').css('color', 'rgb(255, 255, 255)');
    $('#area-portfolio').css('background', 'rgba(0,121,107,0.9)');
    $('#header-portfolio').css('color', 'rgb(255,255,255)');
}
