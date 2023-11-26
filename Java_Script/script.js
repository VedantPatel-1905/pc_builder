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
    $('footer').load('footer.html');
    $('#head').load('head.html');
    $('header.indexHeader').load('header.html');
    $('div.backgroundBlur').load('hiddenMenu.html');
  });

  // jquery  for masthead carousel
  arrowLeft = document.querySelector(".prev");
  arrowRight = document.querySelector(".next");
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
  if(document.body.classList.contains('indexBody')) {

    // add event listeners
  
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
}

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
  
  const nextBtn = document.querySelectorAll(".next");
  const prevBtn = document.querySelectorAll(".prev");

  // This loop selects all the instance the buttons next buttons from the html
  nextBtn.forEach(next => {
    // This event listener applies the function on the button which is clicked
    next.addEventListener("click", () => {
      currentSlide++;
      if(currentSlide > slides.length - 1) {
        currentSlide = 0;
      }
      setActiveSlide();
    });
  });
  
  // This loop selects all the instance the buttons previous buttons from the html
  prevBtn.forEach(previous => {
    // This event listener applies the function on the button which is clicked
    previous.addEventListener("click", () => {
      currentSlide--;
      if(currentSlide < 0) {
        currentSlide = slides.length - 1;
      }  
      setActiveSlide();
    });
  });
  
  // This function removes the visible class from all the slides
  function setActiveSlide() {
    slides.forEach(slide => {
      slide.classList.remove("visible");  
    });
    
    // This function adds the visible class to the active slides
    slides[currentSlide].classList.add("visible");
  }
}

const closes = document.querySelectorAll("div.close")
// This loop selects the instance of all the close button in html file
closes.forEach(close => {
  // This event listener will make the customization box invisible when clicked
  close.addEventListener("click", () =>{
    document.querySelector("section."+close.classList[1]+"> div.productScroll").classList.remove("visible");
    document.querySelector("section."+close.classList[1]+"> div.pre").classList.remove("visible");
    document.querySelector("section."+close.classList[1]+"> div.nex").classList.remove("visible");
    document.querySelector("section."+close.classList[1]+"> div.close").classList.remove("visible");
  });
});
// This loop selects the instance of all the open button in html file
const opens = document.querySelectorAll("a.open")
opens.forEach(open => {
  // This event listener will make the customization box visible when clicked
  open.addEventListener("click", () =>{
    document.querySelector("section."+open.classList[1]+"> div.productScroll").classList.add("visible");
    document.querySelector("section."+open.classList[1]+"> div.pre").classList.add("visible");
    document.querySelector("section."+open.classList[1]+"> div.nex").classList.add("visible");
    document.querySelector("section."+open.classList[1]+"> div.close").classList.add("visible");
    slider(open.classList[1]);

  });
});


// This function will map active content and heaing on aside
$(window).scroll(function() 
{

  // scrollTop gets current scrol position of the screen in px
  var scrollPos = $(window).scrollTop();
  $('section').each(function() 
  {
    // following two lines will calculate the height of the active section 
    var sectionTop = $(this).offset().top - 500; 
    var sectionBottom = sectionTop + $(this).outerHeight();

    var sectionId = $(this).attr('id');
    if (scrollPos >= sectionTop && scrollPos < sectionBottom) 
    {
      console.log(sectionId)
      // Here we get the id of current section and apply css to corresponding heading in aside
      $('section#'+sectionId +'> div').addClass('scroll-right');
    }
    else
    {
      $('section#'+sectionId +' >div').remove('scroll-right');
    }
  });
});
// startSlider();

});


  