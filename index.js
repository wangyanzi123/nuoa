var bannerLeft=document.querySelector(".banner_left");
var bannerImg1=document.querySelector(".banner_imge1");
var bannerLine=document.querySelector(".banner_line");
var bannerImg2=document.querySelector(".banner_imge2");
var bannerImg3=document.querySelector(".banner_imge3");
var bannerImg4=document.querySelector(".banner_imge4");
var banner=document.querySelector(".banner")

var part1 = document.querySelector(".part1");


// var knowRight1=document.querySelector(".know_right1")
// bannerLeft.style.transform="rotateY(0deg)"
// 页面每滚动1px bannnerLeft 要旋转的角度
var speed = 45/window.innerHeight;
var speed1 = 300/window.innerHeight;
var speed2 = 360/window.innerHeight;
window.onscroll=function () {
    console.log(1);
    var top = document.documentElement.scrollTop
    // Y轴旋转动画
    var angle =top*speed;
    // var y=top*speed2
    if(angle<=45){
        bannerLeft.style.transform="rotateY("+(45-angle)+"deg)"
        bannerImg1.style.transform="rotateY("+(45-angle)+"deg)"
    }else{
        bannerLeft.style.transform="rotateY(0)"
        bannerImg1.style.transform="rotateY(0)"
    }
    // 内容平移的动画
    var x=top*speed1;
    if(x<=300){
    bannerLine.style.transform="translateX("+(x-300)+"px)"
    bannerImg2.style.transform="translateX("+(x-300)+"px)"
    bannerImg3.style.transform="translateX("+(x-300)+"px)"
    // part1.style.transform="translateX("+(x-300)+"px)"
    }else{
        bannerLine.style.transform="translateX(0)"
        bannerImg2.style.transform="translateX(0)"
        bannerImg3.style.transform="translateX(0)"
        // part1.style.transform="translateX(0)"
    }
    // 首屏旋转动画
    var angle2=speed2*top;
    if(angle2<=360){
       bannerImg4.style.transform="rotate("+angle2+"deg)";
    }else{
       bannerImg4.style.transform="rotate(360deg)";
    }
    // 处理首屏定位方式
    if(top>window.innerHeight){
        banner.style.position="absolute";
        banner.style.top=window.innerHeight+"px";
    }else{
        banner.style.position="fixed";
        banner.style.top=0;
    }
    // if(top<window.innerWidth+50){
    //     part1.style.left=top-"px";
    // }else{
    //     part1.style.left=window.innerWidth+300+"px";
    // }
}














// 网页内容加载完成
window.onload=function(){
    setTimeout(function(){
        window.scrollTo(0,0);
    },20);

}