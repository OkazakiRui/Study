// ファイル読み込み
const inputFile = document.getElementById("inputfile");
const inputFiles = document.getElementById("inputfiles");
inputFile.addEventListener("change", (event) => {
  console.log(event.target.files);
});
inputFiles.addEventListener("change", (event) => {
  console.log(event.target.files);
});

// const render = new FileReader();

// ファイル表示
const img = document.getElementById("img");

inputFile.addEventListener("change", (event) => {
  const file = event.target.files;
  const render = new FileReader();
  render.readAsDataURL(file[0]);
  render.onload = function () {
    // 読み込まれた時
    console.log(render);
    console.log(render.result);
    // render.result にbase64形式の画像ファイルが入っている
    img.src = render.result;
  };
});

// 複数ファイル表示

inputFiles.addEventListener("change", (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const imgtag = document.createElement("img");
    // imgタグを生成する
    const render = new FileReader();
    render.readAsDataURL(files[i]);
    render.onload = function () {
      console.log(render);
      console.log(render.result);
      imgtag.setAttribute("src", render.result);
      // 生成したimgタグの src
      document.body.appendChild(imgtag);
    };
  }
});
