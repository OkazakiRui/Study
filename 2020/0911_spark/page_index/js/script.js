$(function () {
  const cssstyle = document.querySelectorAll(".b");
  let toggle = 0;
  let defaultStyle;

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

  console.log(conList);
  for (let i = 0; i < btnList.length; i++) {

    if (defaultStyle === undefined) {
      conList[1].style.display = "none";
      btnList[1].style.opacity = "0.5";
    }

    btnList[i].addEventListener("click", () => {
      switch (i) {
        case 0:
          conList[1].style.display = "none";
          conList[i].style.display = "block";
          btnList[1].style.opacity = "0.5";
          btnList[i].style.opacity = "1";
          document.querySelector(".triangle").style.left = "25%"


          break;
        case 1:
          conList[0].style.display = "none";
          conList[i].style.display = "block";
          btnList[0].style.opacity = "0.5";
          btnList[i].style.opacity = "1";
          document.querySelector(".triangle").style.left = "75%"


          break;
      }
    })
  }



  for (let i in btnList) {
    console.log(btnList[i]);
  }


  var audioElement = document.createElement('audio');
  var audioElement2 = document.createElement('audio');
  var audioElement3 = document.createElement('audio');
  audioElement.volume = 0.01;
  audioElement2.volume = 0.05;
  audioElement3.volume = 0.05;

  // === 花火のエフェクト start ===
  const fireworksFunc = function () {
    audioElement.volume = 0.2;
    audioElement2.volume = 0.05;
    audioElement3.volume = 0.05;

    // エフェクトが見えるように
    $('#effectBox').css({
      display: 'block'
    })
    // 花火の個数
    let number = Math.floor(Math.random() * 6) + 8; //8-13
    // console.log(number);
    //花火の個数分のタグを追加
    for (let i = 0; i < number; i++) {
      $('<img src="" alt="" class="gif">').appendTo('#gifBox');
    }
    // 花火をランダムに
    for (let i = 0; i < number; i++) {
      // 花火打ち上げの時間差を作る
      let randomTime = Math.floor(Math.random() * 4001) + 1000; //1000-5000
      setTimeout(() => {
        // === 花火の場所ランダム ===
        let randomTop = Math.floor(Math.random() * 71) + 20; //20-90
        let randomLeft = Math.floor(Math.random() * 91) + 5; //5-95
        let randomZindex = Math.floor(Math.random() * 101) + 1000; //1000-1100
        let randomWidth = Math.floor(Math.random() * 1481) + 500; // 500-1980
        $('.gif').eq(i).css({
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: randomTop + '%',
          left: randomLeft + '%',
          'z-index': randomZindex,
          width: randomWidth,
        });

        // === 花火の種類ランダム ===
        let firekind = Math.floor(Math.random() * 4) + 1;
        let firecolor = Math.floor(Math.random() * 5) + 1;
        $('.gif')[i].src = '../page_room/effect_img/fire0' + firekind + '-0' + firecolor + '.gif';
        // スター(kind2)とバブル(kind4)の時だけ特殊な音を再生
        if (firekind == 2) {
          audioElement2.setAttribute('src', '../page_room/sound/fireworks-star.mp3');
          audioElement2.play();
          audioElement2.addEventListener('ended', function () {
            audioElement2.currentTime = 0;
          });
        } else if (firekind == 4) {
          audioElement3.setAttribute('src', '../page_room/sound/fireworks-bubble.mp3');
          audioElement3.play();
          audioElement3.addEventListener('ended', function () {
            audioElement3.currentTime = 0;
          });
        }
      }, randomTime);
    } //for

    // 音
    setTimeout(() => {
      audioElement.setAttribute('src', '../page_room/sound/fireworks.mp3');
      audioElement.play();
      audioElement.addEventListener('ended', function () {
        audioElement.currentTime = 0;
      });
    }, 2000);


    //いらない要素を見えないように or 削除
    setTimeout(() => {
      //=== gif削除 ===
      $('.gif').remove();
      // エフェクトいれてるタグが消える(無いとボタン類が押せない)
      $('#effectBox').css({
        display: 'none'
      })
    }, 8000); //エフェクトが終わるように時間差をつけてる
  } //fireworksFunc()
  // === 花火のエフェクト end ===

  // === 飛び跳ねる鳥のエフェクト start ===
  const soundbird1 = function () {
    audioElement.volume = 0.01;
    // エフェクトが見えるように
    $('#effectBox').css({
      display: 'block'
    });

    let birdNum = Math.floor(Math.random() * 11) + 10; //10-20 雷の個数
    for (let i = 0; i < birdNum; i++) {
      let randomLeft = Math.floor(Math.random() * 95) + 3; //3-97 場所
      let randomWidth = Math.floor(Math.random() * 81) + 60; //60-140 場所
      $(`<img src="../page_room/effect_img/chicken3.gif" alt="雷" class="gif" style="width:${randomWidth}px; height:auto; opacity:0.7; position:absolute; transform:translate(-50%,-50%); bottom:-30%; left:${randomLeft}%; opacity:1;">`).appendTo('#gifBox');
      let randomTime = Math.floor(Math.random() * 1501) + 0; //0-1500 場所
      setTimeout(() => {
        $('.gif').eq(i).addClass('jumpbird_ani');
      }, randomTime);
    }


    // 音 カウントダウンに合わせて3秒後
    audioElement.setAttribute('src', '../page_room/sound/chicken-full.mp3');
    audioElement.play();
    audioElement.addEventListener('ended', function () {
      audioElement.currentTime = 0;
    });


    setTimeout(() => {
      //=== gif削除 ===
      $('.gif').remove();
      // エフェクトいれてるタグが消える(無いとボタン類が押せない)
      $('#effectBox').css({
        display: 'none'
      })
    }, 7000); //エフェクトが終わるように時間差をつけてる
  }
  // === 飛び跳ねる鳥のエフェクト end ===

  $('#btnA').on('click', function () {
    fireworksFunc();
  });
  $('#btnB').on('click', function () {
    soundbird1();
  });
})