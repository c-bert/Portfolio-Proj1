$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky")
    }
  })
})

// typed text animation

var typed = new Typed('.typed-text', {
  strings: ["Web Developer", "Mechanical Engineer", "Student"],
  typeSpeed: 120,
  backSpeed: 100,
  backDelay:700,
  loop:true,

});

var typed = new Typed('.typed-2', {
  strings: ["Web Developer", "Mechanical Engineer", "Student"],
  typeSpeed: 120,
  backSpeed: 100,
  backDelay:700,
  loop:true,

});

// card flip animation

$(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});

Resources