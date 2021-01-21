const startDate = document.getElementById("startDate");
const goalDate = document.getElementById("goalDate");
const result = document.getElementById("result");

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

function calcDate(
  FirstYear,
  FirstMonth,
  FirstDate,
  SecondYear,
  SecondMonth,
  SecondDate
) {
  const date1 = new Date(FirstYear, FirstMonth, FirstDate);
  const date2 = new Date(SecondYear, SecondMonth, SecondDate);
  return (date2 - date1) / 86400000;
}

startDate.addEventListener("change", (e) => {
  selectStart = e.path[0].value.split("-");
  goalDate.value = correctDate(...selectStart);
  goalDate.min = correctDate(...selectStart);
  result.innerText = 0;
});

goalDate.addEventListener("change", (e) => {
  selectGoal = e.path[0].value.split("-");
  result.innerText = calcDate(...selectStart, ...selectGoal);
});
