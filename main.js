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
  strings: ["Web Developer", "Engineer", "Student"],
  typeSpeed: 120,
  backSpeed: 100,
  backDelay:700,
  loop:true,

});

var typed = new Typed('.typed-2', {
  strings: ["Web Developer", "Engineer", "Student"],
  typeSpeed: 120,
  backSpeed: 100,
  backDelay:700,
  loop:true,

});