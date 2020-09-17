
if ($( window ).width() <= 990) {
  $(".footer-row div:last-child").removeClass("align-right");
  $(".intro").addClass("order-last");
  $(".intro-figures").addClass("order-first");
  $("nav .button").css("display","none");
}

$(window).on("resize", function(){
  if ($( window ).width() <= 990) {
    $(".footer-row div:last-child").removeClass("align-right");
    $(".intro").addClass("order-last");
    $(".intro-figures").addClass("order-first");
    $("nav .button").css("display","none");
  } else {
    $(".footer-row div:last-child").addClass("align-right");
    $(".intro").removeClass("order-last");
    $(".intro-figures").removeClass("order-first");
    $("nav .button").css("display","inline-block");
}});
