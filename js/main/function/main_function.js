/**
 * Created by Shcherbina on 02.05.2017.
 */

function setSizeNewsBlock () {


    $(".news-header").css("width", document.documentElement.clientWidth*0.278);
    $(".news-header").css("height", document.documentElement.clientWidth*0.2);

    $(".main-block-header").css("width", document.documentElement.clientWidth);
    $(".main-block-header").css("height", (document.documentElement.clientWidth*4)/9);

    $(".slider-header-news").css("width", (document.documentElement.clientWidth*311)/960);
    $(".slider-header-news").css("padding-top", (document.documentElement.clientWidth*5)/64);
    $(".slider-header-news").css("padding-left", (document.documentElement.clientWidth*73)/1920);
    $(".slider-header-news").css("max-heightt", (document.documentElement.clientWidth*74)/192);
    /*$(".news-header").css("width", document.documentElement.clientWidth*0.278);
     $(".news-header").css("height", document.documentElement.clientHeight*0.68);*/
}