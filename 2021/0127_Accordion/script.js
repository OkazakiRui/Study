const que = document.getElementById("queBtn");
const ans = document.getElementById("ans");
const que2 = document.getElementById("queBtn2");
const ans2 = document.getElementById("ans2");
const que3 = document.getElementById("queBtn3");
const ans3 = document.getElementById("ans3");

que.onclick = function () {
  ans.classList.toggle("hide");
};
que2.onclick = function () {
  ans2.classList.toggle("hide");
};

que3.onclick = function () {
  ans3.classList.toggle("hide");
};

// let watch = 0;

// que.onclick = function () {
//   if (watch === 0) {
//     ans.classList.remove("hide");
//     watch = 1;
//     console.log("正しい");
//   } else {
//     ans.classList.add("hide");
//     watch = 0;
//     console.log("違うとき");
//   }
// };

// console.dir(ans);
// console.log(ans.classList);

// もしも
// if(条件式){ してほしいこと(処理) }
// else 当てはまらない時

// const number1 = 2;
// const number2 = 2;
// ==   数字と文字でも大丈夫
// ===  完全一致

// if (number1 === number2) {
//   console.log("同じです");
// } else {
//   console.log("違います");
// }
