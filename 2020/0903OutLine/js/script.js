const cssstyle = document.querySelectorAll(".b");
let toggle = 0;

document.body.addEventListener('keydown', event => {
  if (event.key === 'o') {
    switch (toggle) {
      case 0:
        cssstyle.forEach(function (v) {
          v.style.cssText = "outline: 1px solid gray; outline-offset: -1px;"
        })
        toggle = 1;
        break;
      case 1:
        cssstyle.forEach(function (v) {
          v.style.cssText = "";
        })
        toggle = 0;
        break;
    }
  }
});

const btnList = document.querySelectorAll(".usage_button");
const conList = document.querySelectorAll(".usage_contents");

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        conList[1].style.display = "none";
        conList[i].style.display = "block";
        btnList[1].style.border = "none"
        btnList[i].style.border = "1px solid tomato"
        break;
      case 1:
        conList[0].style.display = "none";
        conList[i].style.display = "block";
        btnList[0].style.border = "none"
        btnList[i].style.border = "1px solid tomato"
        break;
    }
  })
}

// for(let i in btnList){
//   console.log(btnList[i]);
// }