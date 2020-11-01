const head = document.querySelector(".header");

window.addEventListener("scroll",() => {
  let scrollY = window.pageYOffset;
  console.log(scrollY);
  document.querySelector(".y-coordinate").innerHTML=scrollY;
  if(scrollY < 1000){
    head.style.cssText = "color: white;";
  }else if(scrollY < 2000){
    head.style.cssText = "color: black;";
  }else if(scrollY < 3000){
    head.style.cssText = "color: white;";
  }else if(scrollY < 4000){
    head.style.cssText = "color: black;";
  }else if(scrollY < 5000){
    head.style.cssText = "color: white;";
  }else if(scrollY < 6000){
    head.style.cssText = "color: black;";
  }else if(scrollY < 7000){
    head.style.cssText = "color: white;";
  }else if(scrollY < 8000){
    head.style.cssText = "color: black;";
  }else if(scrollY < 9000){
    head.style.cssText = "color: white;";
  }else if(scrollY < 10000){
    head.style.cssText = "color: black;";
  }
});