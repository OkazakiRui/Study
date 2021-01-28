// smallgoal
const smallbtns = document.querySelectorAll(".smallgoal__contents__btn1");
const popupSmall = document.getElementById("smallgoal");
const popupSmallBtn = document.getElementById("smallgoalBtn");
const popupSmallText = document.getElementById("smallgoalText");
const popupSmallImg = document.getElementById("smallgoalImg");
let count = 0;

const limit = document.getElementById("limit");
const finish = document.getElementById("finish");
const order = document.getElementById("order");

// smallgoal を 表示
for (let i = 0; i < smallbtns.length; i++) {
  smallbtns[i].addEventListener("click", () => {
    // btn1 のクラスがついてたらpopを出してbtn2に変更
    if (smallbtns[i].classList[0] === "smallgoal__contents__btn1") {
      popupSmall.classList.toggle("hidden");
      smallbtns[i].classList.replace(
        "smallgoal__contents__btn1",
        "smallgoal__contents__btn2"
      );
      count++;

      // innerText変更
      if (count !== 3) {
        popupSmallText.innerHTML = `目標${i + 1}を達成！<br />あと${
          3 - count
        }つがんばろう！`;
      } else {
        popupSmallText.innerHTML = `目標${
          i + 1
        }を達成！<br />目標を全て達成しました！`;
      }

      // images 変更
      switch (i) {
        case 0:
          popupSmallImg.src = "images/smallgoal_img1.png";
          break;
        case 1:
          popupSmallImg.src = "images/smallgoal_img2.png";
          break;
        case 2:
          popupSmallImg.src = "images/smallgoal_img3.png";
          break;
      }
    }
  });
}

// smallgoal の btn を押した
popupSmallBtn.addEventListener("click", () => {
  popupSmall.classList.toggle("hidden");
});

// smallgoal__contents__btn1 を 2に
