
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.querySelectorAll("#photo_slide");
  let dots = document.querySelectorAll(".main__completedprojects-project-navigation-position");
  let citiesNav = document.querySelectorAll(".main__completedprojects-navigation-entry");
  let cities = document.querySelectorAll("#main__completedprojects-city");
  let areas = document.querySelectorAll("#main__completedprojects-area");
  let repairTime = document.querySelectorAll("#main__completedprojects-time");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i=0; i<slides.length; i++) {
    slides[i].setAttribute("style", "display: none");
    cities[i].setAttribute("style", "display: none");
    areas[i].setAttribute("style", "display: none");
    repairTime[i].setAttribute("style", "display: none");
  }

  for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
    citiesNav[i].className = citiesNav[i].className.replace("active_citynav", "");
  }
  slides[slideIndex-1].setAttribute("style", "display: block");
  dots[slideIndex-1].className += " active";
  citiesNav[slideIndex-1].className += " active_citynav";
  cities[slideIndex-1].setAttribute("style", "display: block");
  areas[slideIndex-1].setAttribute("style", "display: block");
  repairTime[slideIndex-1].setAttribute("style", "display: block");
}
