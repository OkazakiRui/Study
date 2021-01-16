const canvas = document.querySelectorAll(".canvas");
const ctx = [];
for (let i = 0; i < canvas.length; i++) {
  ctx[i] = canvas[i].getContext("2d");
  // 3dはwebGL
}
// ca 0
ctx[0].fillStyle = "black";
ctx[0].fillRect(10, 10, 150, 100);

// ca 1
ctx[1].fillStyle = "rgb(200,0,0)";
ctx[1].fillRect(0, 20, 100, 120);
// x,y,x移動値,y移動値
// x移動値 = width | y移動値 = height
ctx[1].fillStyle = "rgba(0,200,0,0.5)";
ctx[1].fillRect(50, 50, 70, 60);

// ca 2
ctx[2].fillRect(25, 25, 250, 100);
ctx[2].clearRect(30, 30, 240, 90);
ctx[2].strokeRect(50, 50, 200, 50);

// ca 3
ctx[3].beginPath();
ctx[3].moveTo(10, 10);
// moveTo でペンを移動
// 座標は絶対値
ctx[3].lineTo(140, 10);
ctx[3].lineTo(75, 140);
ctx[3].fill();

// ca 4
ctx[4].beginPath();
ctx[4].arc(75, 75, 50, 0, Math.PI * 2, true); // 外円
// 円の中心の座標 半径 0で正円 *2で円、奇数で半円
ctx[4].moveTo(110, 75);
ctx[4].arc(75, 75, 35, 0, Math.PI, false); // 半円
ctx[4].moveTo(65, 65);
ctx[4].arc(60, 65, 5, 0, Math.PI * 2, true); // 左
ctx[4].moveTo(95, 65);
ctx[4].arc(90, 65, 5, 0, Math.PI * 2, true); // 右
ctx[4].stroke();

// ca 5
ctx[5].beginPath(); // 塗りつぶし
ctx[5].moveTo(25, 25);
ctx[5].lineTo(105, 25);
ctx[5].lineTo(25, 105);
ctx[5].fill();
ctx[5].beginPath(); // 塗りなし
ctx[5].moveTo(125, 125);
ctx[5].lineTo(125, 45);
ctx[5].lineTo(45, 125);
ctx[5].closePath();
ctx[5].stroke();

// ca 6
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx[6].fillStyle = `rgb(${255 - (255 / 6) * i}, ${255 - (255 / 6) * j}, 0)`;
    ctx[6].fillRect(j * 25, i * 25, 25, 25);
  }
}

// ca 7
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx[7].strokeStyle = `rgb(${255 - (255 / 6) * i},0 ,${
      255 - (255 / 6) * j
    } )`;
    ctx[7].beginPath();
    ctx[7].arc(25 / 2 + j * 25, 25 / 2 + i * 25, 10, 0, Math.PI * 2, true);
    ctx[7].stroke();
  }
}

// ca 8
let offset = 0;
const draw = () => {
  ctx[8].clearRect(0, 0, canvas.width, canvas.height);
  ctx[8].setLineDash([1, 20]);
  ctx[8].lineDashOffset = -offset;
  ctx[8].strokeRect(10, 10, 100, 100);
};
const ing = () => {
  offset++;
  if (offset > 20) {
    offset = 0;
  }
  draw();
  setTimeout(ing, 20);
};
ing();

// ca 9
const img = new Image();
// image要素を作成
img.src = "sign.png";
img.onload = () => {
  // imgが読み込み終わったとき
  canvas[9].width = img.width;
  canvas[9].height = img.height;
  const ptrn = ctx[9].createPattern(img, "no-repeat");
  // パターンを保存 + パターンを繰り返しするかどうか
  ctx[9].fillStyle = ptrn;
  // 塗りつぶしをパターンに変更
  ctx[9].fillRect(0, 0, 250, 250);
  console.log(img.height);
  console.log(img.width);
};

// ca 10
ctx[10].fillText("おぐら ひろき", 10, 20);
ctx[10].font = "18px serif";
ctx[10].fillText("おぐら ひろき", 10, 40);
// 文字の x, y は xは左、yは文字の下
ctx[10].font = "18px serif";
ctx[10].strokeText("おぐら ひろき", 10, 60);

// ca 11
const img2 = new Image();
img2.src = "sign.png";
img2.addEventListener("load", () => {
  ctx[11].drawImage(img2, 0, 0, 150, 150);
  // drawImage(image, x, y, width, height)
});
