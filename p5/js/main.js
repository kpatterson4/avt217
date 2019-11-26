$(document).ready(function(){
  console.log('Noice');

  $(".one").click(function(){
    $(".two").toggleClass("show")
  });

  $(".two").click(function(){
    $(".three").toggleClass("show")
  });

  $(".three").click(function(){
    $(".four").toggleClass("show")
  });

  $(".four").click(function(){
    $(".five").toggleClass("show")
  });

  $(".five").click(function(){
    $(".six").toggleClass("show")
  });
});
