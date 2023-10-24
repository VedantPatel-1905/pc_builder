// Functions show and hide hidden menu 
function showMenu() 
{
  document.getElementById('hiddenMenu').classList.toggle('showMenu');
  document.querySelector('.backgroundBlur').classList.toggle('showMenu');
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

  // after this point margin will stop increasing
  var stopPoint = 3400; 

  // // This function will increase the top margrin of the side bar to make it feel like fixed
  // $(window).scroll(function() 
  // {
  //   // this inbuilt fuction will calculate the px when user scrolls up or down
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop < stopPoint) 
  //   {
  //     var newMargin = 50 + scrollTop * 0.1; 
  //     $('.fixedDiv').css('margin-top', newMargin + 'px');
  //   }
  // });


  // jquery  for masthead carousel
  arrowLeft = document.querySelector("#prev"),
  arrowRight = document.querySelector("#next"),
  i = 2;


  // function to set interval between slides
  function startSlider() {
    interval = setInterval(function() {
      i = i>4  ? 1 : i;
      slideRight();
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
  }
  
  // Show next slide
  function slideRight() {
    reset();
    $('.slider > div#masthead' + i).css('display', 'flex');
  }
  
  // Left arrow click
  arrowLeft.addEventListener("click", function() 
  {
    // clearInterval(interval);
    i--;
    i = i<=0 ? 4 : i;
    slideLeft();
  });
  
  // Right arrow click
  arrowRight.addEventListener("click", function() 
  {
    // clearInterval(interval);
    i++;
    i = i>=5 ? 1 : i;
    slideRight();
  });

  //function to stop slider on mouseover
  // $('.slider').on('mouseover',function() {
  //   clearInterval(interval);
  // });

  //function to start slider on mouseout
  // $('.slider').on('mouseleave',function() {
  //   startSlider()
  // });

  startSlide();
// startSlider();
  

  

});


  