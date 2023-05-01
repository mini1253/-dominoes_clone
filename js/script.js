// 메뉴 아래 밑줄 애니메이션
let horizontalUnderLine = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("ul.mymenu a");

horizontalMenus.forEach(menu => menu.addEventListener("mouseover", (e) => horizontalIndicator(e)));

function horizontalIndicator(e) {
  horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}; 


$(".sub , .sub_wrap").hide();
$(".menu a:last-of-type").click(function() {
  let isVisible = $(".sub , .sub_wrap").is(":visible");
  
  if (isVisible) {
    $(".sub , .sub_wrap").hide();
  } else {
    $(".sub , .sub_wrap").show();
  }
});


//메인슬라이드
new Swiper('.swiper-container', {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$('.play').hide();
$('.stop').click(function () {
mainSlide.autoplay.stop();
$('.stop').hide();
$('.play').show();
});
$('.play').click(function () {
mainSlide.autoplay.start();
$('.play').hide();
$('.stop').show();
});



$(".floating_banner .close_btn").click(function(){
    $(".floating_banner").hide();
});