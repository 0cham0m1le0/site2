let nav = document.querySelector("nav");
let leftnav = document.querySelector(".leftSide");
let rightnav = document.querySelector(".rightSide");
let logofig = document.querySelector(".logoFig");


$(window).scroll(function(){
  if($(window).scrollTop() > 10){
    nav.classList.add("navScroll")
    leftnav.classList.add("leftSideScroll")
    rightnav.classList.add("rightSideScroll")
    logofig.classList.add("logoFigScroll")
  }
  else {
    nav.classList.remove("navScroll")
    leftnav.classList.remove("leftSideScroll")
    rightnav.classList.remove("rightSideScroll")
    logofig.classList.remove("logoFigScroll")
  };
});