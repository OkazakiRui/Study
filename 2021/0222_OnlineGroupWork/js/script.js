new Vue({
  el: '#app',
  data() {
    return {
      profiles: [
        {
          name: '岡崎流依',
          school: 'ECCコンピュータ専門学校',
          birthday: '2002年2月6日',
          likeColor: 'ピンク色・水色',
          myBoom: 'アニメ見る！',
          message: '寝坊せずに頑張ります！',
          photo: 'images/rui.jpg',
        },
        {
          name: '伊藤結奈',
          school: '東京電子専門学校',
          birthday: '2001年6月10日',
          likeColor: '赤色',
          myBoom: '4時間お昼寝',
          message: 'やるぞ！',
          photo: 'images/yuna.jpg',
        },
        {
          name: '山本恋羽',
          school: '神戸電子専門学校',
          birthday: '2002年2月14日',
          likeColor: '青色',
          myBoom: '歌うこと',
          message: '本番もがんばるンゴ・。・',
          photo: 'images/michan.jpg',
        },
      ],
    };
  },
});
