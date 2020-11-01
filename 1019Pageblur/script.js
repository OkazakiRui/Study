const img = document.querySelector("img"); // blurを掛けたい要素

document.addEventListener("scroll",()=>{
  let pageH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(pageH); // ページの全体サイズ - ページの表示サイズ の表示
  let scroll = document.documentElement.scrollTop
  console.log(scroll); // スクロール位置の表示
  let onepar = pageH / 100;
  console.log(onepar); // ページの1%の値を表示
  let par = scroll / onepar;
  console.log(par); // スクロール地点のパーセント表示
  document.querySelector(".parsent").innerHTML = par.toFixed(1) + "%";

  img.style.filter = `blur(${par.toFixed()/5}px)`;
  // imgのstyleのfilterにアクセスし blur() の値を (par/5)pxした値にする。
});