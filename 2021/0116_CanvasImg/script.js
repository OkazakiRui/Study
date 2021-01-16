const input = document.getElementById("input");

let file = null;
let blob = null;

// 圧縮したいサイズ
const maxWidth = 500;
const maxHeight = 500;

input.addEventListener("change", () => {
    console.log(input.files[0]);
    file = input.files[0];

    // 画像じゃなかった場合
    if(file.type != "image/jpeg" && file.type != "image/png"){
        file = null;
        blob = null;
        console.log("選択されたファイルが画像ではありません");
        return;
    }

    const image = new Image();
    const render = new FileReader();
    render.addEventListener("load", (e)=>{
        image.addEventListener("load", ()=>{
            let width, height;

            if(image.width > image.height){
                const raito = image.height / image.width;
                width = maxWidth;
                height = maxWidth * raito;
            } else {
                const raito = image.width / image.height;
                width = maxHeight;
                height = maxHeight * raito;
            }

            const canvas = document.getElementById("canvas");
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");

            // 画像を消す
            ctx.clearRect(0,0,width,height);

            // canvasに描画する
            ctx.drawImage(image,0,0,image.width,image.height,0,0,width,height);

            // canvasから画像をbase64として取得する
            const base64 = canvas.toDataURL("image/jpeg");

            // base64から画像データを作成する
            let barr, bin, i, len;
            bin = atob(base64.split("base64,")[1]);
            len = bin.length;
            barr = new Uint8Array(len);
            i = 0;

            while(i < len){
                barr[i] = bin.charCodeAt(i);
                i++;
            };
            blob = new Blob([barr], {type: "image/jpeg"});
        });
        image.src = e.target.result;
    });
    render.readAsDataURL(file)
});







