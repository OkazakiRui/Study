new Vue({
  el: "#app",
  data: {
    items: {
      item0: {
        itemName: "お菓子の詰め合わせ",
        itemImg: "images/img0.jpg",
        itemPrice: "¥100",
      },
      item1: {
        itemName: "ペン詰め合わせ",
        itemImg: "images/img1.jpg",
        itemPrice: "¥100",
      },
      item2: {
        itemName: "ノートセット",
        itemImg: "images/img2.jpg",
        itemPrice: "¥100",
      },
      item3: {
        itemName: "文具セット",
        itemImg: "images/img3.jpg",
        itemPrice: "¥100",
      },
      item4: {
        itemName: "時計",
        itemImg: "images/img4.jpg",
        itemPrice: "¥100",
      },
      item5: {
        itemName: "付箋セット",
        itemImg: "images/img5.jpg",
        itemPrice: "¥100",
      },
      item6: {
        itemName: "USB",
        itemImg: "images/img6.jpg",
        itemPrice: "¥100",
      },
      item7: {
        itemName: "バスボムセット",
        itemImg: "images/img7.jpg",
        itemPrice: "¥100",
      },
      item8: {
        itemName: "ファイルセット",
        itemImg: "images/img8.jpg",
        itemPrice: "¥100",
      },
      item9: {
        itemName: "パスケース",
        itemImg: "images/img9.jpg",
        itemPrice: "¥100",
      },
      item10: {
        itemName: "ハンカチ",
        itemImg: "images/img10.jpg",
        itemPrice: "¥100",
      },
      item11: {
        itemName: "貯金箱",
        itemImg: "images/img11.jpg",
        itemPrice: "¥100",
      },
      item12: {
        itemName: "ハンドクリーム",
        itemImg: "images/img12.jpg",
        itemPrice: "¥100",
      },
      item13: {
        itemName: "コインケース",
        itemImg: "images/img13.jpg",
        itemPrice: "¥100",
      },
      item14: {
        itemName: "カードケース",
        itemImg: "images/img14.jpg",
        itemPrice: "¥100",
      },
      item15: {
        itemName: "アロマキャンドル",
        itemImg: "images/img15.jpg",
        itemPrice: "¥100",
      },
      item16: {
        itemName: "タンブラー",
        itemImg: "images/img16.jpg",
        itemPrice: "¥100",
      },
      item17: {
        itemName: "図書カード",
        itemImg: "images/img17.jpg",
        itemPrice: "¥200",
      },
    },
  },
});

const img = document.querySelectorAll(".itemWrap");
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    location.href = "reward.html";
  });
}
