var keywords = ["Sharom Lang", "Front End Dev."];
var colours = ["#41c4ab","#fff"];
var count = 1;

$(document).ready(function() {
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 630) {

      $("nav").css("background-color", "#111");
    } else {

     $("nav").css("background-color", "transparent");
   }
 });

  setInterval(function(){    
    $("#fade").fadeOut(800, function(){                 
      $(this).html(keywords[count]).css("color", colours[count]);
      count++; 
      if(count === keywords.length) {
        count = 0;
      }
      $(this).fadeIn(800);    
    });
  }, 2000);

  $('#about').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("section#about").offset().top
    }, 900);
  }); 
});
