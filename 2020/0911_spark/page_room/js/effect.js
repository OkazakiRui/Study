$(function () {

    window.actionKey = false;
    // 音の変数
    var average;
    var audioElement = document.createElement('audio');
    var audioElement2 = document.createElement('audio');
    var audioElement3 = document.createElement('audio');
    audioElement.volume = 0.01;
    audioElement2.volume = 0.05;
    audioElement3.volume = 0.05;

    //audioElement.setAttribute('src', 'ここに音入れるのファイルパス');

    // === 音の再生設定 start ===
    navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        })
        .then(function (stream) {
            audioContext = new AudioContext();
            analyser = audioContext.createAnalyser();
            microphone = audioContext.createMediaStreamSource(stream);
            javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;


            microphone.connect(analyser);
            analyser.connect(javascriptNode);
            javascriptNode.connect(audioContext.destination);
            javascriptNode.onaudioprocess = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                var values = 0;

                var length = array.length;
                for (var i = 0; i < length; i++) {
                    values += (array[i]);
                }

                // averageが音量
                average = values / length;

                // console.log(Math.round(average));
            }
        })
        .catch(function (err) {
            /* handle the error */
        });
    // === 音の再生設定 end ===


    // === 画像のpreload start ===
    function mypreload() {
        // 花火
        for (let i = 1; i < 5; i++) {
            for (let j = 1; j < 6; j++) {
                $(`<img src="effect_img/fire0${i}-0${j}.gif">`);
            }
        }
        $('<img src="effect_img/break.gif">');
        $('<img src="effect_img/chicken-Big-3.gif">');
        $('<img src="effect_img/chicken3.gif">');
        $('<img src="effect_img/explosion.gif">');
        $('<img src="effect_img/thnder01.gif">');
        $('<img src="effect_img/thnder02.gif">');
    }
    // 開始ボタン押して数秒後にプリロード開始
    $('#js-join-trigger').on("click", function () { //開始ボタンを押したとき
        setTimeout(() => {
            mypreload();
        }, 10000);
    })
    // === 画像のpreload end ===



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
                $('.gif')[i].src = 'effect_img/fire0' + firekind + '-0' + firecolor + '.gif';
                // スター(kind2)とバブル(kind4)の時だけ特殊な音を再生
                if (firekind == 2) {
                    audioElement2.setAttribute('src', 'sound/fireworks-star.mp3');
                    audioElement2.play();
                    audioElement2.addEventListener('ended', function () {
                        audioElement2.currentTime = 0;
                    });
                } else if (firekind == 4) {
                    audioElement3.setAttribute('src', 'sound/fireworks-bubble.mp3');
                    audioElement3.play();
                    audioElement3.addEventListener('ended', function () {
                        audioElement3.currentTime = 0;
                    });
                }
            }, randomTime);
        } //for

        // 音
        setTimeout(() => {
            audioElement.setAttribute('src', 'sound/fireworks.mp3');
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



    // === ガラス割れるエフェクト start ===
    const breakFunc = function () {
        audioElement.volume = 0.01;

        // エフェクトが見えるように
        $('#effectBox').css({
            display: 'block'
        });

        $('<img src="" alt="" class="gif" style="width:100%; height:100%; opacity:0.5;">').appendTo('#gifBox');
        $('.gif')[0].src = 'effect_img/break.gif';

        // 音
        audioElement.setAttribute('src', 'sound/glassberak.mp3');
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
        }, 5000); //エフェクトが終わるように時間差をつけてる
    }
    // === ガラス割れるエフェクト end ===



    // === 爆弾エフェクト start ===
    const explosionFunc = function () {
        audioElement.volume = 0.005;
        // エフェクトが見えるように
        $('#effectBox').css({
            display: 'block'
        });

        $('<img src="" alt="" class="gif" style="width:100vw; height:100vh; opacity:0.7;">').appendTo('#gifBox');
        $('.gif')[0].src = 'effect_img/explosion.gif';

        // 音 カウントダウンに合わせて3秒後
        setTimeout(() => {
            audioElement.setAttribute('src', 'sound/ecplotion.mp3');
            audioElement.play();
            audioElement.addEventListener('ended', function () {
                audioElement.currentTime = 0;
            });
        }, 3000);


        setTimeout(() => {
            //=== gif削除 ===
            $('.gif').remove();
            // エフェクトいれてるタグが消える(無いとボタン類が押せない)
            $('#effectBox').css({
                display: 'none'
            })
        }, 5000); //エフェクトが終わるように時間差をつけてる
    }
    // === 爆弾エフェクト end ===


    // === 雷のエフェクト start ===
    audioElement.volume = 0.05;
    const thnderFunc = function () {
        // エフェクトが見えるように
        $('#effectBox').css({
            display: 'block'
        });
        let thnderNum = Math.floor(Math.random() * 3) + 3; //2-5 雷の個数
        for (let i = 0; i < thnderNum; i++) {
            let thnderKind = Math.floor(Math.random() * 2) + 1; //1-2 雷の個数
            let randomLeft = Math.floor(Math.random() * 100) + 1; //1-100 場所
            let randomTop = Math.floor(Math.random() * 31) + 35; //35-65 場所
            $(`<img src="effect_img/thnder0${thnderKind}.gif" alt="雷" class="gif" style="width:100vw; height:100vh; opacity:0.7; position:absolute; transform:translate(-50%,-50%); top:${randomTop}%; left:${randomLeft}%; opacity:1;">`).appendTo('#gifBox');
        }

        setTimeout(() => {
            audioElement.setAttribute('src', 'sound/thnder.mp3');
            audioElement.play();
            audioElement.addEventListener('ended', function () {
                audioElement.currentTime = 0;
            });
        }, 800);


        setTimeout(() => {
            //=== gif削除 ===
            $('.gif').remove();
            // エフェクトいれてるタグが消える(無いとボタン類が押せない)
            $('#effectBox').css({
                display: 'none'
            })
        }, 5000); //エフェクトが終わるように時間差をつけてる
    }
    // === 雷のエフェクト end ===

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
            $(`<img src="effect_img/chicken3.gif" alt="雷" class="gif" style="width:${randomWidth}px; height:auto; opacity:0.7; position:absolute; transform:translate(-50%,-50%); bottom:-30%; left:${randomLeft}%; opacity:1;">`).appendTo('#gifBox');
            let randomTime = Math.floor(Math.random() * 1501) + 0; //0-1500 場所
            setTimeout(() => {
                $('.gif').eq(i).addClass('jumpbird_ani');
            }, randomTime);
        }


        // 音 カウントダウンに合わせて3秒後
        audioElement.setAttribute('src', 'sound/chicken-full.mp3');
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

    window.actionEffect = false;

    function effectPlayer() {

        var time = 0;
        let reloadEffectime = 30000; //ミリ秒//エフェクトを再使用できるようになるまでの時間
        // var counter = 0;
        setInterval(function () {
            // console.log('actioneffect:' + window.actionEffect);
            if (window.actionEffect == 1 || window.actionEffect == '1') {
                fireworksFunc();
                window.actionEffect = false; //エフェクトを使用不可
                setTimeout(() => { //30秒後にエフェクト使用可能に
                    window.actionEffect = 'ok';
                }, reloadEffectime);

            } else if (window.actionEffect == 2 || window.actionEffect == '2') {
                breakFunc();
                window.actionEffect = false;
                setTimeout(() => {
                    window.actionEffect = 'ok';
                }, reloadEffectime);

            } else if (window.actionEffect == 3 || window.actionEffect == '3') {
                explosionFunc();
                window.actionEffect = false;
                setTimeout(() => {
                    window.actionEffect = 'ok';
                }, reloadEffectime);

            } else if (window.actionEffect == 4 || window.actionEffect == '4') {
                thnderFunc();
                window.actionEffect = false;
                setTimeout(() => {
                    window.actionEffect = 'ok';
                }, reloadEffectime);

            } else if (window.actionEffect == 5 || window.actionEffect == '5') {
                soundbird1();
                window.actionEffect = false;
                setTimeout(() => {
                    window.actionEffect = 'ok';
                }, reloadEffectime);

            } else {
                // console.log('もえない');
            }

            // ++counter;
            if (average <= 10) { //自分の周りが基準より静かなら
                time += 1;
                // console.log(time);
                if (time >= 10) { //averageが一定以下が続いたら

                    window.actionKey = true;
                }
            } else {
                window.actionKey = false;
                time = 0;
                // console.log(time);
            }

        }, 1000);


    };

    // 開始ボタン押すと静か探しスタート
    $('#js-join-trigger').on("click", function () { //開始ボタンを押したとき
        setTimeout(() => {
            effectPlayer();
        }, 3000);
    })
})