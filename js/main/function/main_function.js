/**
 * Created by Shcherbina on 02.05.2017.
 */

function setSizeNewsBlock () {
    alert(window.innerWidth)
    alert(window.innerHeight)
    $(".news-header").css("width", document.documentElement.clientWidth*0.278);
    $(".news-header").css("height", document.documentElement.clientHeight*0.6);

    /*$(".news-header").css("width", document.documentElement.clientWidth*0.278);
     $(".news-header").css("height", document.documentElement.clientHeight*0.68);*/
}