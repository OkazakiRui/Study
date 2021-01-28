let defaultStyle;

const styleReset = () => {
  for(let i=0; i<5; i++){
    conList[i].style.cssText = "display:none;";
    btnList[i].style.cssText = "opacity:0.3;";
  }
}

const BtnSwitch = function(btnNumber){
  styleReset();
  conList[btnNumber].style.cssText = "display:block;";
  btnList[btnNumber].style.cssText = "opacity:1;";
}

const btnList = [
  document.querySelectorAll(".btn")
];
const conList = [
  document.querySelectorAll(".contents")
];

for(let i=0; i<5; i++){
  conList[i].style.cssText = "display:none;";
  btnList[i].style.cssText = "opacity:0.3;";
  
  btnList[i].addEventListener("click", ()=>{BtnSwitch(i)})
  
  if(defaultStyle === undefined){
    conList[i].style.cssText = "display:block;";
    btnList[i].style.cssText = "opacity:1;";
    defaultStyle = 0;
  }

}