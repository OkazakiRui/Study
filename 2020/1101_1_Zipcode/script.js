const add = function(){
  const words = document.querySelectorAll("input");
  const word = words[0].value+words[1].value;
  if(word.length === 7){
    document.querySelector("h2").textContent = "";
    search(words[0].value, words[1].value);
  }else{
    document.querySelector("h2").textContent = "不正な桁数";
  }
}


const search = function(word1, word2){
  fetch(`https://madefor.github.io/postal-code-api/api/v1/${word1}/${word2}.json`)
  .then(data => data.json())
  .then(json => {
    row = document.querySelector("table").insertRow();
    row.insertCell().textContent = json.data[0].ja.prefecture;
    row.insertCell().textContent = json.data[0].ja.address1;
    row.insertCell().textContent = json.data[0].ja.address2;
  })
}

const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
  add();
});