function sliceBytes(name) {
  let name_array = name.split("");
  let count = 0;
  let str = "";
  for (i = 0; i < name_array.length; i++) {
    let n = escape(name_array[i]);
    if (n.length < 4) {
      count++;
    } else {
      count += 2;
    }
    if (count > 10) {
      return str + "...";
    }
    str += name.charAt(i);
  }
  return name;
}

const btn = document.querySelector("button");
const input = document.querySelector("input");
const aTag = document.querySelector("a");

btn.addEventListener("click", () => {
  aTag.textContent = sliceBytes(input.value);
});
