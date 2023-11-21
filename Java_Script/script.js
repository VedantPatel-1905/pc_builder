// Functions show and hide hidden menu 
function showMenu() 
{
  document.getElementById('hiddenMenu').classList.toggle('showMenu');
  document.querySelector('.backgroundBlur').classList.toggle('showMenu');
  document.querySelector('.navBtn').classList.toggle('navBtnCross');
}

// this even listener ensure that html is loaded first
document.addEventListener("DOMContentLoaded", function(event) { 

});

$(document).ready(function() 
{

  // This function will load global footer and header
  $(function()
  {
    $('#footer').load('footer.html');
    $('#head').load('head.html');
    $('header.indexHeader').load('header.html');
    $('div.backgroundBlur').load('hiddenMenu.html');
  });

  // jquery  for masthead carousel
  arrowLeft = document.querySelector("#prev"),
  arrowRight = document.querySelector("#next"),
  i = 2;


  // function to set interval between slides
  function startSlider() {
    interval = setInterval(function() {
      i = i>4  ? 1 : i;
      slideRight();
      console.log(i);
    }, 3000);
  }
  // Clear all masthead div
  function reset() {
    $('.slider > div').css('display', 'none');
  }
  function startSlide() {
    reset();
    $('.slider > div#masthead2').css('display', 'flex');
  }


  // Show previous slide
  function slideLeft() {
    reset();
    $('.slider > div#masthead' + i).css('display', 'flex');
    i--;
  }
  
  // Show next slide
  function slideRight() {
    reset();
    console.log(i);
    $('.slider > div#masthead' + i).css('display', 'flex');
    i++;
  }
  
  // Left arrow click
  arrowLeft.addEventListener("click", function() 
  {
    // clearInterval(interval);
    // i--;
    i = i<=0 ? 4 : i;
    slideLeft();
  });
  
  // Right arrow click
  arrowRight.addEventListener("click", function() 
  {
    // clearInterval(interval);
    // i++;
    i = i>=5 ? 1 : i;
    slideRight();
  });

  //function to stop slider on mouseover
  $('.slider').on('mouseover',function() {
    clearInterval(interval);
  });

  //function to start slider on mouseout
  // $('.slider').on('mouseleave',function() {
  //   startSlider()
  // });

  startSlide();
  
// This function is used to toggle sliders on customize pc webpage 
function slider(slide) 
{
  const slides = document.querySelectorAll("section."+slide+">div.productScroll > div");
  let currentSlide = 0; 
  
  const nextBtn = document.querySelectorAll("#next");
  const prevBtn = document.querySelectorAll("#prev");

  nextBtn.forEach(next => {
    next.addEventListener("click", () => {
      currentSlide++;
      if(currentSlide > slides.length - 1) {
        currentSlide = 0;
      }
      setActiveSlide();
    });
  });
  
  prevBtn.forEach(previous => {
    previous.addEventListener("click", () => {
      currentSlide--;
      if(currentSlide < 0) {
        currentSlide = slides.length - 1;
      }  
      setActiveSlide();
    });
  });
  
  function setActiveSlide() {
    slides.forEach(slide => {
      slide.classList.remove("visible");  
    });
    
    slides[currentSlide].classList.add("visible");
  }
}

const closes = document.querySelectorAll("div.close")
closes.forEach(close => {
  close.addEventListener("click", () =>{
    document.querySelector("section."+close.classList[1]+"> div.productScroll").classList.remove("visible");
    document.querySelector("section."+close.classList[1]+"> div.pre").classList.remove("visible");
    document.querySelector("section."+close.classList[1]+"> div.nex").classList.remove("visible");
    document.querySelector("section."+close.classList[1]+"> div.close").classList.remove("visible");
  });
});
const opens = document.querySelectorAll("a.open")
opens.forEach(open => {
  open.addEventListener("click", () =>{
    document.querySelector("section."+open.classList[1]+"> div.productScroll").classList.add("visible");
    document.querySelector("section."+open.classList[1]+"> div.pre").classList.add("visible");
    document.querySelector("section."+open.classList[1]+"> div.nex").classList.add("visible");
    document.querySelector("section."+open.classList[1]+"> div.close").classList.add("visible");
    slider(open.classList[1]);

  });
});
// startSlider();

});


  