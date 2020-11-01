<?php
  $form="form02";
  // $data = filter_input(INPUT_POST, $_POST , FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  
  $data=$_POST;
  // print_r($data);
  require_once("DOCTYPE.php");
?>

<body>
  <?php require_once("header.php")?>

  <table border="1" id="tableOrignal">
    <tr>
      <th>お名前</th>
      <td id="name1"><?php echo $data["name1"][0];?></td>
    </tr>
    <tr>
      <th>フリガナ</th>
      <td id="name2"><?php echo $data["name2"][0];?></td>
    </tr>
    <tr>
      <th>電話番号</th>
      <td id="phone"><?php echo $data["phone1"][0],"-",$data["phone2"][0],"-",$data["phone3"][0];?></td>
    </tr>
    <tr>
      <th>メールアドレス</th>
      <td id="mail"><?php echo $data["mail"][0];?></td>
    </tr>
    <tr>
      <th>郵便番号</th>
      <td id="zip"><?php echo $data["zip1"][0],"-",$data["zip2"][0];?></td>
    </tr>
    <tr>
      <th>住所</th>
      <td id="address"><?php echo $data["address1"][0],$data["address2"][0];?></td>
    </tr>
    <tr>
      <th>お問い合わせ内容</th>
      <td id="question"><?php echo $data["question"][0];?></td>
    </tr>
    <tr>
      <th colspan="2"><button id="btn">保存</button></th>
    </tr>
    <tr>
      <th colspan="2"><button id="btn2">読み込み</button></th>
    </tr>
  </table>

  <table border="1" id="saveTable">
    <tr>
      <th>お名前</th>
      <td id="name1out">例：田中太郎</td>
    </tr>
    <tr>
      <th>フリガナ</th>
      <td id="name2out">例：タナカタロウ</td>
    </tr>
    <tr>
      <th>電話番号</th>
      <td id="phoneout">例：0120-500-500</td>
    </tr>
    <tr>
      <th>メールアドレス</th>
      <td id="mailout">例：tanaka@gmail.com</td>
    </tr>
    <tr>
      <th>郵便番号</th>
      <td id="zipout">例：234-5678</td>
    </tr>
    <tr>
      <th>住所</th>
      <td id="addressout">例：愛知県田中市太郎町234-5678</td>
    </tr>
    <tr>
      <th>お問い合わせ内容</th>
      <td id="questionout">例：ラーメン太郎に行き過ぎて太ってしまいました。</td>
    </tr>
  </table>



  
  <script>
      document.getElementById("btn").onclick=function(){
        let name1=document.getElementById("name1").innerHTML;
        let name2=document.getElementById('name2').innerHTML;
        let phone=document.getElementById("phone").innerHTML;
        let mail=document.getElementById("mail").innerHTML;
        let zip=document.getElementById("zip").innerHTML;
        let address=document.getElementById("address").innerHTML;
        let question=document.getElementById("question").innerHTML;
        
        console.log(`name1=${name1}`);
        console.log(`name2=${name2}`);
        console.log(`phone=${phone}`);
        console.log(`mail=${mail}`);
        console.log(`zip=${zip}`);
        console.log(`address=${address}`);
        console.log(`question=${question}`);

        localStorage.setItem("name1",name1);
        localStorage.setItem("name2",name2);
        localStorage.setItem("phone",phone);
        localStorage.setItem("mail",mail);
        localStorage.setItem("zip",zip);
        localStorage.setItem("address",address);
        localStorage.setItem("question",question);
      }


      document.getElementById("btn2").onclick=function(){
      let name1="";
      let name2="";
      let phone="";
      let mail="";
      let zip="";
      let address="";
      let question="";


      if(!localStorage.getItem("name1")){
        name1="お名前が入力されていません";
      }
      else{
        name1=localStorage.getItem("name1");
      }
      console.log(`name1=${name1}`);
      document.getElementById("name1out").innerHTML=name1;
      
      if(!localStorage.getItem("name2")){
        name2="フリガナが入力されていません";
      }
      else{
        name2=localStorage.getItem("name2");
      }
      console.log(`name2=${name2}`);
      document.getElementById("name2out").innerHTML=name2;

      if(localStorage.getItem("phone").length==2){
        phone="電話番号が入力されていません";
      }
      else{
        phone=localStorage.getItem("phone");
      }
      console.log(`phone=${phone}`);
      document.getElementById("phoneout").innerHTML=phone;
      
      if(!localStorage.getItem("mail")){
        mail="メールアドレスが入力されていません";
      }
      else{
        mail=localStorage.getItem("mail");
      }
      console.log(`mail=${mail}`);
      document.getElementById("mailout").innerHTML=mail;

      if(localStorage.getItem("zip").length==1){
        zip="郵便番号が入力されていません";
      }
      else{
        zip=localStorage.getItem("zip");
      }
      console.log(`zip=${zip}`);
      document.getElementById("zipout").innerHTML=zip;

      if(localStorage.getItem("address").length==4){
        address="住所が入力されていません";
      }
      else{
        address=localStorage.getItem("address");
      }
      console.log(`address=${address}`);
      document.getElementById("addressout").innerHTML=address;

      if(!localStorage.getItem("question")){
        question="お問い合わせ内容が入力されていません";
      }
      else{
        question=localStorage.getItem("question");
      }
      console.log(`question=${question}`);
      document.getElementById("questionout").innerHTML=question;
      }

































    // // let count;
    // // localStorage.setItem("count",count);
    // // if(localStorage.getItem("count"){
      
    //   // })
      
      
    //   let saveCount;

    //   // 日本語定義
    //   // const jap1="お名前";
    //   const jap=["お名前","フリガナ","電話番号","メールアドレス","郵便番号","住所","お問い合わせ内容"];

    //   document.getElementById("btn").onclick=function(){
    //     // let name1 = document.getElementById("name1").value;
    //     // if(!saveCount){
    //     //   saveCount=0;
    //     // }

    //     // saveCount++;

    //     // table定義
        
    //       // document.body.tableList.style.display=block;
          
    //       // let data=[,
    //       // document.getElementById('name1').innerHTML,
    //       // document.getElementById('name2').innerHTML,
    //       // document.getElementById("phone").innerHTML,
    //       // document.getElementById("mail").innerHTML,
    //       // document.getElementById("zip").innerHTML,
    //       // document.getElementById("address").innerHTML,
    //       // document.getElementById("question").innerHTML];

    //       let name1=document.getElementById('name1').innerHTML;
    //       let name2=document.getElementById('name2').innerHTML;
    //       let phone=document.getElementById("phone").innerHTML;
    //       let mail=document.getElementById("mail").innerHTML;
    //       let zip=document.getElementById("zip").innerHTML;
    //       let address=document.getElementById("address").innerHTML;
    //       let question=document.getElementById("question").innerHTML;
    //       // localStorage.setItem("data",data);

    //       // for(v=0;v<7;v++){
    //         localStorage.setItem("name1",name1);
    //         localStorage.setItem("name2",name2);
    //         localStorage.setItem("phone",phone);
    //         localStorage.setItem("mail",mail);
    //         localStorage.setItem("zip",zip);
    //         localStorage.setItem("address",address);
    //         localStorage.setItem("question",question);

    //         // localStorage.setItem("name1",data[0]);
    //         // localStorage.setItem("name2",data[1]);
    //         // localStorage.setItem("phone",data[2]);
    //         // localStorage.setItem("mail",data[3]);
    //         // localStorage.setItem("zip",data[4]);
    //         // localStorage.setItem("address",data[5]);
    //         // localStorage.setItem("question",data[6]);


    //       // }

    //       // console.log(data[i]);
          
    //       // table処理開始
    //       // let table = document.getElementById("saveTable");
          
    //       // // table.deleatRow(i);

          
          
    //       // let newRow = table.insertRow();
    //       // let newCell = newRow.insertCell();
    //       // newRow = table.insertRow();
    //       // newText = document.createTextNode(i);
    //       // newCell.appendChild(newText);
          
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(jap[0]);
    //       // newCell.appendChild(newText);
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(data[i]);
    //       // newCell.appendChild(newText);
          
    //       // newRow = table.insertRow();
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(jap[1]);
    //       // newCell.appendChild(newText);
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(data[i+1]);
    //       // newCell.appendChild(newText);
          
    //       // newRow = table.insertRow();
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(jap[2]);
    //       // newCell.appendChild(newText);
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(data[i+2]);
    //       // newCell.appendChild(newText);
          
    //       // newRow = table.insertRow();
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(jap[3]);
    //       // newCell.appendChild(newText);
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(data[i+3]);
    //       // newCell.appendChild(newText);
          
    //       // newRow = table.insertRow();
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(jap[4]);
    //       // newCell.appendChild(newText);
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(data[i+4]);
    //       // newCell.appendChild(newText);
          
    //       // newRow = table.insertRow();
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(jap[5]);
    //       // newCell.appendChild(newText);
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(data[i+5]);
    //       // newCell.appendChild(newText);
          
    //       // newRow = table.insertRow();
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(jap[6]);
    //       // newCell.appendChild(newText);
    //       // newCell = newRow.insertCell();
    //       // newText = document.createTextNode(data[i+6]);
    //       // newCell.appendChild(newText);
          
          
          
    //       // for(v=0;v<saveCount*8;v++){
    //       //   table.deleteRow(v+1);
    //       // }
          
          
          
    //       // // お名前
    //       // let name1 = document.getElementById("name1").innerHTML;
    //       // console.log(`name1=${name1}`);
    //       // localStorage.setItem("name1",name1);
      
    //       // // console.log(name1);
      
    //       // // カタカナ
    //       // let name2 = document.getElementById("name2").innerHTML;
    //       //   console.log(`name2=${name2}`);
    //       //   localStorage.setItem("name2",name2);
            
    //       // // 電話番号
    //       // let phone = document.getElementById("phone").innerHTML;
    //       //   console.log(`phone=${phone}`);
    //       //   localStorage.setItem("phone",phone);
            
    //       // // メールアドレス
    //       // let mail = document.getElementById("mail").innerHTML;
    //       //   console.log(`mail=${mail}`);
    //       //   localStorage.setItem("mail",mail);
            
    //       // // 郵便番号
    //       // let zip = document.getElementById("zip").innerHTML;
    //       //   console.log(`zip=${zip}`);
    //       //   localStorage.setItem("zip",zip);
            
    //       // // 住所
    //       // let address = document.getElementById("address").innerHTML;
    //       //   console.log(`address=${address}`);
    //       //   localStorage.setItem("address",address);
            
    //       // // お問い合わせ内容
    //       // let question = document.getElementById("question").innerHTML;
    //       //   console.log(`question=${question}`);
    //       //   localStorage.setItem("question",question);
      
      
    //       //ボタン回数カウンタ
    //       // let count=0;
    //       //   count++;
    //       //   console.log(count);
          
    //       // let tableList = document.getElementById("tableList");
          
      
    //   }


    //   document.getElementById("btn2").onclick=function(){
    //     // let name1 = document.getElementById("name1").value;
    //     if(!saveCount){
    //       saveCount=0;
    //     }

    //     saveCount++;


    //     // table定義
        
    //     for(i=0;i<saveCount;i++){
    //       // console.log(i);
    //       localStorage.setItem("saveCount",saveCount);
    //       console.log(saveCount);
    //       // document.body.tableList.style.display=block;
          
          
    //       // table処理開始
    //       let table = document.getElementById("saveTable");
          
    //       // table.deleatRow(i);

          
          
    //       let newRow = table.insertRow();
    //       let newCell = newRow.insertCell();
    //       newText = document.createTextNode(jap[0]);
    //       newCell.appendChild(newText);
    //       newCell = newRow.insertCell();
    //       // newText = document.createTextNode=name1;
    //       newCell.appendChild(name1);
          
    //       newRow = table.insertRow();
    //       newCell = newRow.insertCell();
    //       newText = document.createTextNode(jap[1]);
    //       newCell.appendChild(newText);
    //       newCell = newRow.insertCell();
    //       // newText = document.createTextNode=name2;
    //       newCell.appendChild(name2);
          
    //       newRow = table.insertRow();
    //       newCell = newRow.insertCell();
    //       newText = document.createTextNode(jap[2]);
    //       newCell.appendChild(newText);
    //       newCell = newRow.insertCell();
    //       // newText = document.createTextNode=phone;
    //       newCell.appendChild(phone);
          
    //       newRow = table.insertRow();
    //       newCell = newRow.insertCell();
    //       newText = document.createTextNode(jap[3]);
    //       newCell.appendChild(newText);
    //       newCell = newRow.insertCell();
    //       // newText = document.createTextNode=mail;
    //       newCell.appendChild(mail);
          
    //       newRow = table.insertRow();
    //       newCell = newRow.insertCell();
    //       newText = document.createTextNode(jap[4]);
    //       newCell.appendChild(newText);
    //       newCell = newRow.insertCell();
    //       // newText = document.createTextNode=zip;
    //       newCell.appendChild(zip);
          
    //       newRow = table.insertRow();
    //       newCell = newRow.insertCell();
    //       newText = document.createTextNode(jap[5]);
    //       newCell.appendChild(newText);
    //       newCell = newRow.insertCell();
    //       // newText = document.createTextNode=address;
    //       newCell.appendChild(address);
          
    //       newRow = table.insertRow();
    //       newCell = newRow.insertCell();
    //       newText = document.createTextNode(jap[6]);
    //       newCell.appendChild(newText);
    //       newCell = newRow.insertCell();
    //       // newText = document.createTextNode=question;
    //       newCell.appendChild(question);

    //     }

    //   }

    </script>
  </body>
</html>