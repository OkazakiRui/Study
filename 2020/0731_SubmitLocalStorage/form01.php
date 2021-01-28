<?php 
  $form="form01";
  // $img_path = "img/"
  require_once("DOCTYPE.php");
  
  // $email = filter_input(INPUT_POST, "email" , FILTER_SANITIZE_FULL_SPECIAL_CHARS);


?>

<body>
  <?php require_once("header.php")?>
  
  <div class="container">
    <ul>
      <li>InnerPeaceCafe</li>
      <li class="dainari">></li>
      <li>お問い合わせ / Contact</li>
    </ul>

    <h2>お問い合わせ / Contact</h2>
    <p class="hajime">下記フォームより必要事項とご質問内容を記入いただき、送信ボタンを押してください。</p>
    <p class="chuui">
      ※ご入力いただきました個人情報は、お問い合わせ内容に関するご対応のため弊社担当よりご連絡させていただく場合にのみ使用し、その他の目的には一切使用いたしません。<br>
      当フォームにて取得したお客様の個人情報は、当社プライバシーポリシーに基づいて厳重に管理致します。<br>
      ご質問の内容によってはお答え出来ない場合もございます。返答はお時間をいただく場合もございます。
    </p>

    <form action="form02.php" name="submitForm" method="POST">
      <table class="table">
        <tr class="table-right">
          <th colspan="2"><span class="table-red">■</span>は必須入力項目です。</th>
        </tr>
        <tr><td colspan="2"><div class="table-border"></div></td></tr>
        <tr>
          <th class="table-th"><span class="table-red">■　</span>お名前</th>
          <td><input type="text" name="name1[]" size="50px" id="name1"></td>
        </tr>
        <tr><td colspan="2"><div class="table-border"></div></td></tr>
        <tr>
          <th class="table-th"><span class="table-black">■　</span>フリガナ</th>
          <td><input type="text" name="name2[]" size="50px" id="name2"></td>
        </tr>
        <tr><td colspan="2"><div class="table-border"></div></td></tr>
          <tr>
            <th class="table-th"><span class="table-red">■　</span>電話番号</th>
            <td>
              <input type="text" name="phone1[]" size="4px" id="phone1" maxlength="4"> - 
              <input type="text" name="phone2[]" size="4px" id="phone2" maxlength="4"> - 
              <input type="text" name="phone3[]" size="4px" id="phone3" maxlength="4">
            </td>
          </tr>
          <tr><td colspan="2"><div class="table-border"></div></td></tr>
          <tr>
            <th class="table-th"><span class="table-red">■　</span>メールアドレス</th>
            <td><input type="text" name="mail[]" size="50px" id="mail"></td>
          </tr>
          <tr><td colspan="2"><div class="table-border"></div></td></tr>
          <tr>
            <th class="table-th"><span class="table-black">■　</span>住所</th>
            <td>
              〒 <input type="text" name="zip1[]" size="3px" id="zip1" maxlength="3"> - 
              <input type="text" name="zip2[]" size="4px" id="zip2" maxlength="4">
              <select name="address1[]" id="address1">
                <option selected="selected">都道府県</option>
                <option value="北海道">北海道</option>
                <option value="青森県">青森県</option>
                <option value="岩手県">岩手県</option>
                <option value="秋田県">秋田県</option>
                <option value="山形県">山形県</option>
                <option value="宮城県">宮城県</option>
                <option value="福島県">福島県</option>
                <option value="茨城県">茨城県</option>
                <option value="栃木県">栃木県</option>
                <option value="群馬県">群馬県</option>
                <option value="埼玉県">埼玉県</option>
                <option value="千葉県">千葉県</option>
                <option value="東京都">東京都</option>
                <option value="神奈川県">神奈川県</option>
                <option value="山梨県">山梨県</option>
                <option value="長野県">長野県</option>
                <option value="新潟県">新潟県</option>
                <option value="富山県">富山県</option>
                <option value="石川県">石川県</option>
                <option value="福井県">福井県</option>
                <option value="静岡県">静岡県</option>
                <option value="愛知県">愛知県</option>
                <option value="三重県">三重県</option>
                <option value="岐阜県">岐阜県</option>
                <option value="滋賀県">滋賀県</option>
                <option value="奈良県">奈良県</option>
                <option value="和歌山県">和歌山県</option>
                <option value="京都府">京都府</option>
                <option value="大阪府">大阪府</option>
                <option value="兵庫県">兵庫県</option>
                <option value="岡山県">岡山県</option>
                <option value="広島県">広島県</option>
                <option value="鳥取県">鳥取県</option>
                <option value="島根県">島根県</option>
                <option value="山口県">山口県</option>
                <option value="徳島県">徳島県</option>
                <option value="香川県">香川県</option>
                <option value="愛媛県">愛媛県</option>
                <option value="高知県">高知県</option>
                <option value="福岡県">福岡県</option>
                <option value="佐賀県">佐賀県</option>
                <option value="長崎県">長崎県</option>
                <option value="大分県">大分県</option>
                <option value="熊本県">熊本県</option>
                <option value="宮崎県">宮崎県</option>
                <option value="鹿児島県">鹿児島県</option>
                <option value="沖縄県">沖縄県</option>
              </select>
            </td>
          </tr>
          <tr>
            <th class="table-th"><span>　</span></th>
            <td><input type="text" name="address2[]" size="50px" id="address2" placeholder="市区町村"></td>
          </tr>
          <tr><td colspan="2"><div class="table-border"></div></td></tr>
          <tr>
            <th colspan="2" class="table-th"><span class="table-red">■　</span>お問い合わせ内容をご記入下さい</th>
          </tr>
          <tr>
            <td colspan="2">
              <textarea name="question[]" cols="50" rows="6" id="question"></textarea>
            </td>
          </tr>
        </table>
        
        <div class="last">
          <p class="saigo">内容をご確認の上、[送信]ボタンを押してください</p>
          <button name="送信" class="submit" id="btn" type="button">送 信</button>
          <input type="reset" name="取消" value="取 消" class="reset" >
        </div>
      </form>
    </div>    
    <script>
      let btn = document.getElementById("btn");
      
      btn.onclick=function(){
        // let name1 = document.getElementById("name1").value;
        // let name2 = document.getElementById("name2").value;
        // let phone1 = document.getElementById("phone1").value;
        // let phone2 = document.getElementById("phone2").value;
        // let phone3 = document.getElementById("phone3").value;
        // let mail = document.getElementById("mail").value;
        // let postal1 = document.getElementById("postal1").value;
        // let postal2 = document.getElementById("postal2").value;
        // let prefectures = document.getElementById("prefectures").value;
        // let address = document.getElementById("address").value;
        // let question = document.getElementById("question").value;
        document.submitForm.submit();
      }
  </script>
</body>
</html>