const getT = function(){
  fetch("https://tetsudo.rti-giken.jp/free/delay.json")
  .then(data=>data.json())
  .then(json => {
    for(let i= 0;i<json.length;i++){
      const trainName = json[i].name;
      const company = json[i].company;
      const row = document.getElementById("trainList").insertRow();
      row.insertCell().textContent = "　"+ (i + 1);
      row.insertCell().textContent = "　"+trainName;
      row.insertCell().textContent = "　"+company;
    }
  })
}
const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
  getT();
})

