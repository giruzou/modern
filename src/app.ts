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


    $('#area-myname').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.9)');
            $('#title-text').css('color', 'rgb(25, 118, 210)');
        },
        function(e) {
            $(this).css('background', 'rgba(25, 118, 210,0.9)');
            $('#title-text').css('color', 'rgb(255,255,255)');
        }
    );

    $('#area-myname').on('click', function () {
        flag = 1;
        $('#page001').css('display', 'block');
        $('#page002').css('display', 'none');
        $('#page004').css('display', 'none');
        $('#page005').css('display', 'none');
        $('#page006').css('display', 'none');
        window.scrollTo(0, 0);
        contentLinkReset();
    });


    $('#area-portfolio').hover(
        function(e) {
            $(this).css('background', 'rgba(255,255,255,0.9)');
            $('#header-portfolio').css('color', 'rgb(0,121,107)');
        },
        function (e) {
            if (flag != 6) {
                $(this).css('background', 'rgba(0,121,107,0.9)');
                $('#header-portfolio').css('color', 'rgb(255,255,255)');
            }
        }
    );

    $('#area-infomation-title').hover(
        function(e) {
            $(this).css('background', '#fff');
            $('#text-infomation-title').css('color', '#42A5F5');
        },
        function(e) {
            $(this).css('background', '#42A5F5');
            $('#text-infomation-title').css('color', '#fff');
        }
    );

    $('.area-infomation').hover(
        function(e) {
            $(this).css('background', '#FFF176');
        },
        function(e) {
            $(this).css('background', '#F0F0F0');
        }
    );

    $('.content-link').hover(
        function(e) {
            $(this).css('background', 'rgba(250,250,250,0.9)');
            $(this).children('p').css('color', 'rgb(25, 118, 210)');
        },
        function(e) {
            $(this).css('background', 'rgba(25, 118, 210,0.9)');
            $(this).children('p').css('color', 'rgb(255, 255, 255)');

            if (flag == 2) {
                $('#content-link-about').css('background', 'rgba(250,250,250,0.9)');
                $('#content-link-about').children('p').css('color', 'rgb(25, 118, 210)');
            } else if (flag == 3) {
                console.log("error");
            } else if (flag == 4) {
                $('#content-link-blog').css('background', 'rgba(250,250,250,0.9)');
                $('#content-link-blog').children('p').css('color', 'rgb(25, 118, 210)');
            } else if (flag == 5) {
                $('#content-link-works').css('background', 'rgba(250,250,250,0.9)');
                $('#content-link-works').children('p').css('color', 'rgb(25, 118, 210)');
            }
        }
    );

    $('#content-link-about').on('click', function () {
        flag = 2;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'block');
        $('#page004').css('display', 'none');
        $('#page005').css('display', 'none');
        $('#page006').css('display', 'none');
        window.scrollTo(0, 0);
        contentLinkReset();
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(25, 118, 210)');
    });

    $('#content-link-blog').on('click', function () {
        flag = 4;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'none');
        $('#page004').css('display', 'block');
        $('#page005').css('display', 'none');
        $('#page006').css('display', 'none');
        window.scrollTo(0, 0);
        contentLinkReset();
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(25, 118, 210)');
    });

    $('#content-link-works').on('click', function () {
        flag = 5;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'none');
        $('#page004').css('display', 'none');
        $('#page005').css('display', 'block');
        $('#page006').css('display', 'none');
        window.scrollTo(0, 0);
        contentLinkReset();
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(25, 118, 210)');
    });

    $('#area-button-member').hover(
        function(e) {
            $(this).css('background', '#FFFFFF');
            $('#text-button-member').css('color', '#1976D2');
        },
        function(e) {
            $(this).css('background', '#1976D2');
            $('#text-button-member').css('color', '#FFFFFF');
        }
    );

    $('#area-button-member').hover(
        function (e) {
            $(this).css('background', '#FFFFFF');
            $('#text-button-member').css('color', '#1976D2');
        },
        function (e) {
            $(this).css('background', '#1976D2');
            $('#text-button-member').css('color', '#FFFFFF');
        }
    );

    $('.area-content-portfolio').hover(
        function (e) {
            $(this).css('background', '#FFFFFF');
            $(this).children('p').css('color', '#1976D2');
        },
        function (e) {
            $(this).css('background', '#1976D2');
            $(this).children('p').css('color', '#FFFFFF');
        }
    );

    $('.area-content-portfolio').on('click', function() {
        window.open('https://set1.ie.aitech.ac.jp/koukaten/2016/');
        $(this).css('background', 'rgba(25, 118, 210, 0.9)');
        $('#header-github').css('color', 'rgb(255,255,255)');
    });

    $('#area-portfolio').on('click', function () {
        flag = 6;
        $('#page001').css('display', 'none');
        $('#page002').css('display', 'none');
        $('#page004').css('display', 'none');
        $('#page005').css('display', 'none');
        $('#page006').css('display', 'block');
        window.scrollTo(0, 0);
        contentLinkReset();
        $(this).css('background', 'rgba(250,250,250,0.9)');
        $(this).children('p').css('color', 'rgb(0,121, 107)');
    });
});

$('#area-infomation-001').on('click', function () {
    window.open('https://set1.ie.aitech.ac.jp/koukaten2017');
});
$('#area-content-portfolio-002').on('click', function() {
    window.open('https://set1.ie.aitech.ac.jp/koukaten2017');
    $(this).css('background', 'rgba(25, 118, 210, 0.9)');
    $('#header-github').css('color', 'rgb(255,255,255)');
});

$('#text-message').on('click', function () {
    window.open('https://set1.ie.aitech.ac.jp/koukaten2017');
});

function contentLinkReset() {
    $('.content-link').css('background', 'rgba(25, 118, 210,0.9)');
    $('.content-link').children('p').css('color', 'rgb(255, 255, 255)');
    $('#area-portfolio').css('background', 'rgba(0,121,107,0.9)');
    $('#header-portfolio').css('color', 'rgb(255,255,255)');
}
