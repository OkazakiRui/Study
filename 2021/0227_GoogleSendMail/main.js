function doGet(e) {
  if(e){
    var p = e.parameter;
    var address = "okazaki200226@gmail.com";
    var title = "岡崎流依のportfolioから送信";
    var name = p.name;
    var mail = p.mail;
    var text = p.text;
    var content = text + "\n" + name + " 様から送信 \n" + mail;
    MailApp.sendEmail(address,title,content);
  }
}