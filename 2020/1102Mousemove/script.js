const item = document.getElementById("item");

window.addEventListener("mousemove", (e) => {
  item.style.top = e.clientY + "px";
  item.style.left = e.clientX + "px";
});
