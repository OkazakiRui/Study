'use strict';
const head = document.querySelector(".header");
const colorchange = function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      head.style.color = "white";
      console.log(entry.target)
    }else{
      head.style.color = "black";
      
    }
  })
}
const options = {
  root:null,
  rootMarin:"0px",
  threshold:0
}
const io = new IntersectionObserver(colorchange, options);
const mainList = document.querySelectorAll(".main>div:nth-child(2n +1)");
// console.log(mainList);
mainList.forEach(v => io.observe(v))
