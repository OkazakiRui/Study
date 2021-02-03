$(function () {
    let talkthemeGet = '';
    let timeGet = '';

    // トークテーマを変更したときにvalue値を取得、aタグのリンク先を変更
    $('#select_talktheme').on('change', function () {
        console.log($('#select_talktheme')[0].value);
        talkthemeGet = $('#select_talktheme')[0].value;
        $('#toSpark')[0].href = `../page_room/?talktheme=${talkthemeGet}&time=${timeGet}`;
        console.log($('#toSpark')[0].href);
    });

    // 時間を変更したときにvalue値を取得、aタグのリンク先を変更
    $('#select_time').on('change', function () {
        console.log($('#select_time')[0].value);
        timeGet = $('#select_time')[0].value;
        $('#toSpark')[0].href = `../page_room/?talktheme=${talkthemeGet}&time=${timeGet}`;
        console.log($('#toSpark')[0].href);
    });

})