const Peer = window.Peer;

(async function main() {
    let roomId;
    let date;
    setInterval(() => {
        date = new Date();
    }, 1000);
    let effectArray = []; //effect判定用の配列
    const localVideo = document.getElementById('js-local-stream');
    const joinTrigger = document.getElementById('js-join-trigger');
    const leaveTrigger = document.getElementById('js-leave-trigger');

    const localStream = await navigator.mediaDevices
        .getUserMedia({
            audio: true,
            video: true
            // video: {
            //     minWidth: 256,
            //     minHeight: 144,
            //     maxWidth: 640,
            //     maxHeight: 360,
            //     aspectRatio: {
            //         exact: 1.7777777778
            //     },
            // }
        })
        .catch(console.error);

    // Render local stream
    localVideo.muted = true;
    localVideo.srcObject = localStream;
    localVideo.playsInline = true;
    await localVideo.play().catch(console.error);

    // eslint-disable-next-line require-atomic-updates
    const peer = (window.peer = new Peer({
        key: window.__SKYWAY_KEY__,
        debug: 3,
    }));


    // === video,audioのオンオフ機能 start===
    // アイコン表示はもっと下の方で実装
    let videoFlg = true; //true映ってる,false映ってない
    let audioFlg = true;
    const updateVideoEnabled = (enabled) => { //引数にtrue/falseでvideoSet
        if (localStream) {
            localStream.getVideoTracks()[0].enabled = enabled;
        }
    }
    const updateAudioEnabled = (enabled) => { //引数にtrue/falseでAudioSet
        if (localStream) {
            localStream.getAudioTracks()[0].enabled = enabled;
        }
    }

    $('#videoBtn').on('click', function () {
        if (videoFlg) { //消える
            // 自分のパソコンの表示
            videoFlg = false;
            $('#videoBtn')[0].src = 'img/spark_video_off.png';
            updateVideoEnabled(videoFlg);

        } else { //映る
            videoFlg = true;
            $('#videoBtn')[0].src = 'img/spark_video.png';
            updateVideoEnabled(videoFlg);
        }
    });



    $('#audioBtn').on('click', function () {
        if (audioFlg) { //マイクオフ
            audioFlg = false;
            $('#audioBtn')[0].src = 'img/spark_mute_off.png';
            updateAudioEnabled(audioFlg);
        } else { //マイクオン
            audioFlg = true;
            $('#audioBtn')[0].src = 'img/spark_mute.png';
            updateAudioEnabled(audioFlg);
        }
    });
    // === video,audioのオンオフ機能 end===


    // urlにroomidが入ってるとき
    var params = (new URL(document.location)).searchParams;
    var getId = params.get('id');
    // console.log('id :', getId);
    if (getId == null || getId == undefined || getId == '') {
        // roomId作成
        roomId = Math.random().toString(32).substring(2); //ランダムでルームid作成
        // console.log(roomId);
        roomUrl = location.href + '&id=' + roomId;
        $('.urlcopy_url')[0].textContent = roomUrl;
        $('.urlcopy_url')[1].textContent = roomUrl;
    } else {
        roomId = getId;
        console.log(roomId);
        $('.urlcopy_url')[0].textContent = location.href;
        $('.urlcopy_url')[1].textContent = location.href;
        roomUrl = location.href;
    }

    // roomurlのコピーのfunction
    function clipURL() {
        // console.log(myid);
        $('body').append('<textarea id="currentURL" style="position:fixed;left:-100%;">' + roomUrl + '</textarea>');
        $('#currentURL').select();
        document.execCommand('copy');
        $('#currentURL').remove();
        alert("URLをコピーしました。");
    }

    // roomurlのコピー
    $('.pre_urlcopy_box').on('click', function () {
        clipURL();
    });
    $('.spark_urlcopy_box').on('click', function () {
        clipURL();
    });


    // lineのリンク先をroomidによって変更
    $('.pre_linecopy_box')[0].href = "https://social-plugins.line.me/lineit/share?url=" + roomUrl;
    $('.spark_linecopy_box')[0].href = "https://social-plugins.line.me/lineit/share?url=" + roomUrl;


    // Register join handler
    joinTrigger.addEventListener('click', () => {

        //  === 入室処理 start ===
        // Note that you need to ensure the peer has connected to signaling server
        // before using methods of peer instance.
        if (!peer.open) {
            return;
        }

        const room = peer.joinRoom(roomId, {
            mode: window.__SKYWAY_TYPE_,
            stream: localStream,
            metadata: {
                name: 'baka',
            }

        });

        room.send('name_' + $('#sparkname')[0].value);
        // 自分の名前を表示
        $(`<p id="box" style="position:absolute; display:block; bottom:20px; left:10px; background-color:#424242; opacity:0.9; font-size:1rem; padding:2px 5px; color:white;">${$('#sparkname')[0].value}</p>`).appendTo(`#local-stream-box`);
        //  === 入室処理 end ===


        room.on('stream', async stream => {

            //videoを囲う要のdiv作成
            $(`<div id="${stream.peerId}box" class="videoBox" style="position:relative; padding:2px; height:40%; order:2;"></div>`).appendTo('#roomBox');
            // video作成
            const newVideo = document.createElement('video');
            newVideo.srcObject = stream;
            newVideo.playsInline = true;
            newVideo.setAttribute('data-peer-id', stream.peerId);
            newVideo.style.width = 'auto';
            newVideo.style.height = 100 + '%';
            newVideo.style.borderRadius = 0;
            // newVideo.style.transform = 'scale(1,0.75)'
            // console.log(newVideo);
            $(`#${stream.peerId}box`).append(newVideo);
            // 名前表示
            $(`<p id="${stream.peerId}_name" class="name" style="position:absolute; display:block; bottom:20px; left:10px; background-color:#424242; opacity:0.9; font-size:1rem; padding:2px 5px; color:white;">${`${stream.peerId}`}</p>`).appendTo(`#${stream.peerId}box`);

            await newVideo.play().catch(console.error);
            nameFlg = true;
            effectArray = []; //effect判定用配列リセット

        });
        // === 入室したときのvideo追加 end ===

        // console.log(room);
        // room.getLog();

        let nameFlg = true;
        var socket = {};
        room.on('data', data => {
            let text = data['data'];
            let result = text.includes('name_');

            if (result) { //名前が送られてきたとき
                socket[`${data['src']}`] = data['data'].replace('name_', '');
                setTimeout(() => {
                    // console.log($(`#${data['src']}_name`)[0]);
                    $(`#${data['src']}_name`)[0].textContent = socket[`${data['src']}`];
                    // $('.name')[0].textContent = data['data'];
                    // console.log($('.name'));
                }, 1000);
                // console.log($('.name'));


            }
            // console.log(socket);
            // console.log(data);
            setTimeout(() => {
                if (nameFlg) {
                    room.send('name_' + $('#sparkname')[0].value);
                    nameFlg = false;
                    // console.log('送った');
                }

            }, 1000);
        });


        // === 退出処理 start ===
        // for closing room members 抜けた人を他の人の画面で消す
        room.on('peerLeave', peerId => {
            for (let i = 0; i < $('.videoBox').length; i++) {
                const remoteVideo = $('.videoBox')[i].querySelector(`[data-peer-id="${peerId}"]`);
                if (remoteVideo !== null) {
                    remoteVideo.srcObject.getTracks().forEach(track => {
                        track.stop();
                    });
                    remoteVideo.srcObject = null;
                    // 抜けた人のvideo囲ってるdivを削除
                    $(`#${peerId}box`).remove()
                    // remoteVideo.remove();
                }
            }
            effectArray = [];

        });

        // for closing myself 抜けた人自身の画面の関数
        room.once('close', () => {
            console.log($('.videoBox')[0]);
            for (let i = 0; i < $('.videoBox').length; i++) {
                const remoteVideos = $('.videoBox')[i].querySelectorAll('[data-peer-id]');
                Array.from(remoteVideos)
                    .forEach(remoteVideo => {
                        remoteVideo.srcObject.getTracks().forEach(track => track.stop());
                        remoteVideo.srcObject = null;
                        remoteVideo.remove();
                    });

            }
        });

        // 通話着るボタン押したとき
        leaveTrigger.addEventListener('click', () => {
            room.close();
            setTimeout(() => {
                console.log('a');
                location.reload();
            }, 1000);
        }, {
            once: true
        });
        // === 退出処理 end ===


        // === スタンプ処理 ===
        // スタンプ送る時
        for (let i = 0; i < 18; i++) {
            $('.stamp').eq(i).on('click', function () {
                // スタンプの一覧を閉じる
                if (!stampFlg) {
                    $('#spark_stamp').css({
                        visibility: 'hidden'
                    })
                    stampFlg = true;
                }
                // 自分の映像の上にスタンプを表示
                //背景薄く
                $('#js-local-stream').css({
                    opacity: '0.7',
                })
                // 自分に画像
                // console.log($('#local-stream-box')[0].offsetHeight);
                // imgのheightはpadding分の4pxさげてる
                $(`<img id="local-stream-box_stamp" class="stamp" src="stamp_img/stamp_${i + 1}.gif" style="height:${$('#local-stream-box')[0].offsetHeight - 4}px; width:auto; position:absolute; display:block; transform:translate(-50%,-50%); top:50%; left:50%;"></img>`).appendTo(`#local-stream-box`);
                //スタンプ情報送信
                room.send(`stamp_${i + 1}`);
                // 背景と画像を戻す
                setTimeout(() => {
                    $(`#local-stream-box_stamp`).remove();
                    $('#js-local-stream').css({
                        opacity: '1',
                    })
                }, 3000);
            });
            // スタンプ送られた時
            room.on('data', data => {
                // 送られてきたスタンプの確認
                let text = data['data'];
                let result = text.includes('stamp_');
                if (result) {
                    let stampKind = text.replace('stamp_', '');
                    if (stampKind == i + 1 || stampKind == i + 1) {
                        // 背景薄く
                        $(`#${data['src']}box`).css({
                            opacity: '0.7',
                        })

                        // console.log($(`#${data['src']}box`)[0].offsetHeight);
                        // 相手の画面の自分に画像
                        // imgのheightはpadding分の4pxさげてる
                        $(`<img id="${data['src']}_stamp" class="stamp" src="stamp_img/stamp_${i + 1}.gif" style="height:${$(`#${data['src']}box`)[0].offsetHeight - 4}px; width:auto; position:absolute; display:block; transform:translate(-50%,-50%); top:50%; left:50%;"></img>`).appendTo(`#${data['src']}box`);
                        // 背景と画像を戻す
                        setTimeout(() => {
                            $(`#${data['src']}_stamp`).remove();
                            $(`#${data['src']}box`).css({
                                opacity: '1',
                            })
                        }, 3000);
                    }
                }
            })

        }
        //=== スタンプ処理 end ===

        // === ビデオオフ、ミュート処理（2） start ===

        let videoIconFlg = true; //true映ってる,false映ってない
        let audioIconFlg = true;

        // ---ビデオ---
        $('#videoBtn').on('click', function () {
            if (videoIconFlg) { //消える
                videoIconFlg = false;
                // 名前の横にミュート表示
                $(`<img id="local-stream-box_videoIcon" class="video_effect" src="img/spark_video_off_dispaly.png" style="height:110px; width:110px; position:absolute; display:block; transform:translate(-50%,-50%); top:50%; left:50%;"></img>`).appendTo(`#local-stream-box`);
                // 相手のパソコンへ情報送信
                room.send(`display_none`);

            } else { //映る
                videoIconFlg = true;
                // 名前の横のミュート表示を消す
                $(`#local-stream-box_videoIcon`).remove();

                // 相手のパソコンへ情報送信
                room.send(`video`);
            }
        });

        // 相手のパソコンでの表示を変える
        room.on('data', data => {
            let text = data['data'];
            if (text == 'display_none') {
                $(`<img id="${data['src']}_videoIcon" class="video_effect" src="img/spark_video_off_dispaly.png" style="height:110px; width:110px; position:absolute; display:block; transform:translate(-50%,-50%); top:50%; left:50%;"></img>`).appendTo(`#${data['src']}box`);
            } else if (text == 'video') {
                $(`#${data['src']}_videoIcon`).remove();
            }
        });

        // ---マイク---
        $('#audioBtn').on('click', function () {
            if (audioIconFlg) { //消える
                audioIconFlg = false;
                // 名前の横にミュート表示
                $(`<img id="local-stream-box_mute" class="mute_effect" src="img/spark_mute_display.png" style="height:36px; width:36px; position:absolute; display:block; transform:translate(-50%,-50%); top:80%; left:6%;"></img>`).appendTo(`#local-stream-box`);
                // 相手のパソコンへ情報送信
                room.send(`mute`);

            } else { //映る
                audioIconFlg = true;
                // 名前の横のミュート表示を消す
                $(`#local-stream-box_mute`).remove();

                // 相手のパソコンへ情報送信
                room.send(`voiceon`);
            }
        });

        // 相手のパソコンでの表示を変える
        room.on('data', data => {
            let text = data['data'];
            if (text == 'mute') {
                $(`<img id="${data['src']}_mute" class="mute_effect" src="img/spark_mute_display.png" style="height:36px; width:36px; position:absolute; display:block; transform:translate(-50%,-50%); top:80%; left:6%;"></img>`).appendTo(`#${data['src']}box`);
            } else if (text == 'voiceon') {
                $(`#${data['src']}_mute`).remove();
            }
        });
        // === ビデオオフ、ミュート処理（2） end ===

        // === 時間で部屋の終了 start ===
        // 関数
        let timeup = function (allnum, num) { //allnum:設定時間 num:通知は何分後か
            setTimeout(() => {
                console.log('b');
                var getTalk = params.get('talktheme');
                // トークテーマが設定されてないときにトークテーマ欄を表示
                if (getTalk == 'none' || getTalk == null || getTalk == undefined || getTalk == '') {
                    $('.spark_flex1').css({
                        visibility: 'visible',
                    });
                }
                let theme = $('#spark_talktheme')[0].textContent;
                $('#spark_talktheme')[0].textContent = `残り${allnum - num}分です`;
                room.send(`timeup_${allnum - num}`);
                // 10秒後にテキスト戻す
                setTimeout(() => {
                    $('#spark_talktheme')[0].textContent = theme;
                }, 10000);
                if (getTalk == 'none' || getTalk == null || getTalk == undefined || getTalk == '') {
                    $('.spark_flex1').css({
                        visibility: 'hidden'
                    })
                }
            }, num * 60 * 1000); //分 x 60秒 x 1000ミリ秒 
        }

        room.on('data', data => {
            timeupFlg = false;
            let text = data['data'];
            let result = text.includes('timeup');
            if (result) { //送られてきたのが'action'なら
                let timeupText = text.replace('timeup_', '');
                $('#spark_talktheme')[0].textContent = `残り${timeupText}分です`;
            }
        })


        let timeupFlg = true;
        var getTime = params.get('time');
        // console.log(getTime);
        if (timeupFlg) {
            if (getTime == 30) {
                console.log('a');
                timeup(getTime, 25);
                timeup(getTime, 29);
                setTimeout(() => {
                    room.close();
                    location.reload;
                }, 30 * 60 * 6000);
            } else if (getTime == 60) {
                timeup(getTime, 30);
                timeup(getTime, 55);
                timeup(getTime, 59);
                setTimeout(() => {
                    room.close();
                    location.reload;
                }, 60 * 60 * 6000);
            } else if (getTime == 90) {
                timeup(getTime, 30);
                timeup(getTime, 60);
                timeup(getTime, 89);
                setTimeout(() => {
                    room.close();
                    location.reload;
                }, 90 * 60 * 6000);
            } else if (getTime == 120) {
                timeup(getTime, 30);
                timeup(getTime, 60);
                timeup(getTime, 90);
                timeup(getTime, 115);
                timeup(getTime, 119);
                setTimeout(() => {
                    room.close();
                    location.reload;
                }, 120 * 60 * 1000);
            }
        }
        // === 時間で部屋の終了 end ===
        // 部屋作った人が抜けるとどうさしなくなる


        //=== テーマの設定 start ===
        const talkFirst = ['最近食べたおいしい物', '好きなYouTuber', '好きな食べ物', '血液型', '好きなお酒', '出身地', '将来の夢、目標'];
        const talkFriend = ['最近の失敗談', '最近の流行', '最近食べたおいしい物', '最近聞いてる歌', '旅行したい場所', '悩んでること', '将来の夢、目標'];
        const talkStudent = ['好きなYouTuber', '最近聞いてる歌', '最近食べたおいしい物', '旅行したい場所', '宝くじ当たったら何する', 'コンビニのおいしいもの', '飼いたいペット'];
        const talkAdult = ['最近の失敗談', '好きなお酒', '最近食べたおいしい物', '最近聞いてる歌', '旅行したい場所', '悩んでること', '将来の夢、目標'];
        const talkDrink = ['最近の失敗談', '好きなお酒', '最近食べたおいしい物', '最近聞いてる歌', '旅行したい場所', '悩んでること', '将来の夢、目標'];
        const talkTalk = ['趣味、はまってること', '最近見てるもの', '最近食べたおいしい物', '旅行したい場所', '好きなゲーム', '最近買ったもの', '便利で手放せないもの'];
        const talkMygod = ['推しのいいところ', '推しの動画', '推しのイベント', '推しの最高な点'];

        var getTalk = params.get('talktheme');
        // console.log(getTalk);
        if (getTalk == 'none' || getTalk == null || getTalk == undefined || getTalk == '') {
            $('.spark_flex1').css({
                visibility: 'hidden'
            })
        } else if (getTalk == 'first') {
            $('#spark_talktheme')[0].textContent = `${talkFirst[0]}`;
            let numI = 1;
            setInterval(() => {
                $('#spark_talktheme')[0].textContent = `${talkFirst[numI]}`;
                if (numI >= 6) {
                    clearInterval();
                }
                numI++;
            }, 10 * 60 * 1000)
        } else if (getTalk == 'friend') {
            $('#spark_talktheme')[0].textContent = `${talkFriend[0]}`;
            let numI = 1;
            setInterval(() => {
                $('#spark_talktheme')[0].textContent = `${talkFriend[numI]}`;
                if (numI >= 6) {
                    clearInterval();
                }
                numI++;
            }, 10 * 60 * 1000)
        } else if (getTalk == 'student') {
            $('#spark_talktheme')[0].textContent = `${talkStudent[0]}`;
            let numI = 1;
            setInterval(() => {
                $('#spark_talktheme')[0].textContent = `${talkStudent[numI]}`;
                if (numI >= 6) {
                    clearInterval();
                }
                numI++;
            }, 10 * 60 * 1000)
        } else if (getTalk == 'adult') {
            $('#spark_talktheme')[0].textContent = `${talkAdult[0]}`;
            let numI = 1;
            setInterval(() => {
                $('#spark_talktheme')[0].textContent = `${talkAdult[numI]}`;
                if (numI >= 6) {
                    clearInterval();
                }
                numI++;
            }, 10 * 60 * 1000)
        } else if (getTalk == 'drink') {
            $('#spark_talktheme')[0].textContent = `${talkDrink[0]}`;
            console.log('baka');
            let numI = 1;
            console.log($('#spark_talktheme')[0]);
            setInterval(() => {
                $('#spark_talktheme')[0].textContent = talkDrink[numI];
                if (numI >= 6) {
                    clearInterval();
                }
                numI++;
            }, 10 * 60 * 1000)
        } else if (getTalk == 'talk') {
            $('#spark_talktheme')[0].textContent = `${talkTalk[0]}`;
            let numI = 1;
            setInterval(() => {
                $('#spark_talktheme')[0].textContent = `${talkTalk[numI]}`;
                if (numI >= 6) {
                    clearInterval();
                }
                numI++;
            }, 10 * 60 * 1000)
        } else if (getTalk == 'mygod') {
            $('#spark_talktheme')[0].textContent = `${talkMygod[0]}`;
            let numI = 1;
            setInterval(() => {
                $('#spark_talktheme')[0].textContent = `${talkMygod[numI]}`;
                if (numI >= 3) {
                    clearInterval();
                }
                numI++;
            }, 10 * 60 * 1000)
        }

        // === テーマの設定 end ===

        // === エフェクトのタイミングと種類を合わす start ===
        let myEffectFlg = false; //自分が静かか判定
        let actionFlg = true; //送る回数を一回に
        window.actionEffect = 'ok'; //エフェクトを使用可能かを判定(true:使用可, false:使用不可, 数字:そのエフェクトを実行)
        // actionKeyで静かならtrue, うるさかったらfalseがくる
        // let date; //リセット用
        setInterval(() => {
            if (window.actionEffect == 'ok') {
                // console.log(window.actionKey); //自分が10秒以上静かならtrue
                if (window.actionKey && actionFlg) {
                    actionFlg = false;
                    myEffectFlg = true;
                    let kk = Math.floor(Math.random() * 5) + 1;

                    room.send(`action_${kk}`); //送る
                    if (effectArray.length == $('.videoBox').length) {
                        if (window.actionEffect == 'ok') {
                            window.actionEffect = kk;
                            actionFlg = true; //自分が静かなときに毎秒情報送るのを防ぐやつ, trueなら送れる
                            effectArray = [];
                        }
                    }
                } else if (window.actionKey == false) {
                    room.send('noisy');
                }
            }

            if (window.actionEffect == 'ok') {
                if (date.getSeconds() == 0 && date.getMinutes() % 3 == 0) { //
                    myEffectFlg = false; //自分が静かか判定
                    actionFlg = true; //送る回数を一回に
                    window.actionEffect = 'ok'; //エフェクトを使用可能かを判定(true:使用可, false:使用不可, 数字:そのエフェクトを実行)
                    effectArray = [];
                }
            } else {
                if (date.getSeconds() == 0 && date.getMinutes() % 6 == 0) { //時間が5の倍数の分のとき、情報リセット
                    myEffectFlg = false; //自分が静かか判定
                    actionFlg = true; //送る回数を一回に
                    window.actionEffect = 'ok'; //エフェクトを使用可能かを判定(true:使用可, false:使用不可, 数字:そのエフェクトを実行)
                    effectArray = [];
                }

            }

        }, 1000);

        // うるさいとき
        room.on('data', data => {
            let text = data['data'];
            if (text == 'noisy') {
                myEffectFlg = false; //自分が静かか判定
                actionFlg = true;
                effectArray = [];
            }
        })

        // 他の人がエフェクト静かか判定
        room.on('data', data => {
            let text = data['data'];
            let result = text.includes('action');
            if (result) { //送られてきたのが'action'なら
                if (effectArray.some(target => target === data['src']) == false) { //prrrIdが配列にあるか確認
                    effectArray.push(data['src']); //prrrIdを配列に保存
                    console.log(effectArray);
                }
                console.log('参加人数は' + $('.videoBox').length); //自分以外の参加人数の数
                if (effectArray.length == $('.videoBox').length && myEffectFlg == true) { //配列の数と参加人数が同じなら
                    let effectKind = text.replace('action_', '');
                    myEffectFlg = false;
                    // // エフェクトを決定して全員に送る
                    // // 自分の画面にエフェクト起こすよう
                    if (window.actionEffect == 'ok') {
                        window.actionEffect = effectKind;
                        actionFlg = true; //自分が静かなときに毎秒情報送るのを防ぐやつ, trueなら送れる
                        effectArray = [];
                    }
                }
            }
        });
        // === エフェクトのタイミングと種類を合わす end ===


    }); //room内

    peer.on('error', console.error);



    // console.log($('#js-join-trigger')[0]);
    // === 画面のUIを変更 start ===
    $('#js-join-trigger').on("click", function () { //開始ボタンを押したとき
        $('body').css({
            'background-color': '#fff6e6'
        })
        $('#pre_leftbox').css({
            display: 'none',
        });

        $('#container').css({
            width: '100%',
            height: '100%',
            'justify-content': 'center',
            'align-items': 'flex-start',
            padding: '0 0 100px 0'
        });
        $('#roomBox').css({ //.pre_rightbox
            // width: '50%',
            // height: 'auto',
            width: '100%',
            height: '100%',
            margin: '0 0 100px 0',
            // padding: '0 0 100px 0',
            'justify-content': 'center',
            'align-items': 'center'

        });
        $('#local-stream-box').css({
            height: '40%',
        })
        $('#js-local-stream').css({ //video
            width: 'auto',
            height: '100%',
            'border-radius': 0,
        })
        $('#js-join-trigger').css({
            display: 'none'
        })
        // fixboxの表示
        $('#spark_fixBox').css({
            visibility: 'visible'
        })
    });
    // === 画面のUIを変更 end ===



    // === 共有リンク表示オンオフ start===
    let linkFlg = true;
    $('#spark_linkBtn').on('click', function () {
        // スタンプ一覧映ってたら消す
        if (!stampFlg) {
            $('#spark_stamp').css({
                visibility: 'hidden'
            })
            stampFlg = true;
        }
        // オンオフ
        if (linkFlg) {
            $('#spark_link').css({
                visibility: 'visible'
            })
            linkFlg = false;
        } else {
            $('#spark_link').css({
                visibility: 'hidden'
            })
            linkFlg = true;
        }
    });
    // === 共有リンク表示オンオフ end===

    // === スタンプ表示オンオフ start===
    let stampFlg = true;
    $('#spark_reaction').on('click', function () {
        // リンク一覧でてたら消す
        if (!linkFlg) {
            $('#spark_link').css({
                visibility: 'hidden'
            })
            linkFlg = true;
        }
        // オンオフ
        if (stampFlg) {
            $('#spark_stamp').css({
                visibility: 'visible'
            })
            stampFlg = false;
        } else {
            $('#spark_stamp').css({
                visibility: 'hidden'
            })
            stampFlg = true;
        }
    });
    // === スタンプ表示オンオフ end===


})();