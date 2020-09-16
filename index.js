
$(window).on("resize", function(){
  if ($( window ).width() <= 990) {
    console.log($( window ).width());
    $("body").css("backgroundColor","blue");
  } else $("body").css("backgroundColor","red");
})
