const inner = document.querySelector(".houkou");
document.body.addEventListener("keydown", event => {
  inner.innerHTML = event.key.toUpperCase() + "<br>" + "keycode" + event.keyCode;

})