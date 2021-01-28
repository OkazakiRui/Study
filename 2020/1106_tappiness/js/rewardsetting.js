const startDate = document.getElementById("startDate");
const goalDate = document.getElementById("goalDate");
const newDate = new Date();
const today = [
  newDate.getFullYear(),
  newDate.getMonth() + 1,
  newDate.getDate(),
];
let selectStart, selectGoal;

function correctDate(year, month, date) {
  month = String(month);
  date = String(date);
  if (month.length === 1) {
    month = "0" + month;
  }
  if (date.length === 1) {
    date = "0" + date;
  }
  return year + "-" + month + "-" + date;
}

// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());

// 今日の日付をminに代入
startDate.min = correctDate(...today);

startDate.addEventListener("change", (e) => {
  selectStart = e.path[0].value.split("-");

  goalDate.value = correctDate(...selectStart);
  goalDate.min = correctDate(...selectStart);
});
