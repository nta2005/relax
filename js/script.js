$(document).ready(function () {
  $(".content a").fancybox();
  TweenMax.staggerFrom(
    $(".content a"), // phần tử được chọn
    0.2, // thời gian chuyển động
    { top: 100, opacity: 0 },
    0.2 // thời gian cách nhau giữa mỗi hiệu ứng
  );
});
