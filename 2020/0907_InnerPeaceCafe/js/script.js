document.addEventListener(
  "DOMContentLoaded",
  function () {
    let swiper = new Swiper(".review .swiper-container", {
      nextButton: ".btn_right",
      prevButton: ".btn_left",
      loop: true,
    });
  },
  false
);

let defaultStyle;

const styleReset = () => {
  for (let i = 0; i < 4; i++) {
    conList[i].style.cssText = "display:none;";
    btnList[i].style.cssText = "opacity:0.2;";
  }
};

const BtnSwitch = function (btnNumber) {
  styleReset();
  conList[btnNumber].style.cssText = "display:block;";
  btnList[btnNumber].style.cssText = "opacity:1;";
};

const btnList = [
  document.querySelector(".solution_btn1"),
  document.querySelector(".solution_btn2"),
  document.querySelector(".solution_btn3"),
  document.querySelector(".solution_btn4"),
];
const conList = [
  document.querySelector(".solution_content1"),
  document.querySelector(".solution_content2"),
  document.querySelector(".solution_content3"),
  document.querySelector(".solution_content4"),
];

// const conList = document.querySelectorAll('.solution_content');

for (let i = 0; i < 4; i++) {
  conList[i].style.cssText = "display:none;";
  btnList[i].style.cssText = "opacity:0.2;";

  btnList[i].addEventListener("click", () => {
    BtnSwitch(i);
  });

  if (defaultStyle === undefined) {
    conList[i].style.cssText = "display:block;";
    btnList[i].style.cssText = "opacity:1;";
    defaultStyle = 0;
  }
}

const header = document.querySelector(".header");
const reservation = document.querySelector(".reservation");
const white = [
  document.querySelector(".mainvisual"),
  document.querySelector(".review"),
];
const HC = function (entries) {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.className == "mainvisual") {
        header.style.mixBlendMode = "normal";
        reservation.style.background = "#7ABF85";
        reservation.style.color = "white";
      }
      console.log(entry.target.className + " true");
    } else {
      if (entry.target.className == "mainvisual") {
        header.style.mixBlendMode = "difference";
        reservation.style.background = "#85407a";
        reservation.style.color = "black";
      }
      console.log(entry.target.className + " false");
    }
  });
  // entries.forEach(entry => {
  //   if(entry.isIntersecting){
  //       header.style.mixBlendMode = "normal";
  //       reservation.style.background = "#7ABF85";
  //       reservation.style.color = "white";
  //     console.log(entry.target.className + " true");
  //   } else if(entry.isIntersecting === false) {
  //       header.style.mixBlendMode = "difference";
  //       reservation.style.background = "#85407a";
  //       reservation.style.color = "black";
  //     console.log(entry.target.className + " false");

  //   }
  // });

  // for (let i in entries) {
  //   if (entries.isIntersecting) {
  //     header.style.mixBlendMode = "normal";
  //     reservation.style.background = "#7ABF85";
  //     reservation.style.color = "white";
  //   } else if (entries[0] == false && entries[1] == false)
  //     header.style.mixBlendMode = "difference";
  //   reservation.style.background = "#85407a";
  //   reservation.style.color = "black";
  //   // header.style.mixBlendMode = "difference";
  // }
};

const options = {
  root: null,
  rootMargin: "0px",
  thresshold: 1,
};

const io = new IntersectionObserver(HC, options);
white.forEach((el) => io.observe(el));
