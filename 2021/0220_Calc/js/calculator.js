const check = (val = "指定なし") => {
  console.log(
    "val:",
    val,
    "inputNumber:",
    inputNumber,
    "totalNumber:",
    totalNumber,
    "dotCount:",
    dotCount,
    "operations:",
    operations
  );
};

const output = document.getElementById("CalAns");
const inputNumbersBtn = document.querySelectorAll(".CItem");
const inputOperationsBtn = document.querySelectorAll(".CItemOperations");
const button = document.querySelectorAll("button");
console.log(inputNumbersBtn);
console.log(inputOperationsBtn);

let totalNumber = 0;
let inputNumber = "";
// inputNumberにdotが含まれたか
let dotCount = 0;
// 数字以外のキーが押されているか否かとその中身。
let operations = "";

const totalNumberReset = () => {
  totalNumber = 0;
};
const inputNumberReset = () => {
  dotCount = 0;
  inputNumber = "";
};
const operationsReset = () => {
  operations = "";
};

// 結合の処理
const totalNumberConnect = (inputNum) => {
  if (inputNum === "." && dotCount) {
  } else {
    if (inputNum === ".") {
      dotCount = 1;
    }

    if (inputNumber === "" || inputNumber === "0") {
      switch (inputNum) {
        case ".":
          inputNumber = "0.";
          break;

        case "0":
          inputNumber = "0";
          break;

        case "00":
          inputNumber = "0";
          break;

        default:
          inputNumber = inputNum;
          break;
      }
    } else {
      inputNumber += inputNum;
    }
  }
};

const calcAction = () => {
  if (inputNumber === "") {
    console.log("inputNum がないよ；； 再計算できません。");
  } else {
    switch (operations) {
      case "＋":
        totalNumber = Number(totalNumber) + Number(inputNumber);
        break;
      case "−":
        totalNumber = Number(totalNumber) - Number(inputNumber);
        break;
      case "×":
        totalNumber = Number(totalNumber) * Number(inputNumber);
        break;
      case "÷":
        totalNumber = Number(totalNumber) / Number(inputNumber);
        break;
    }
    // operationsReset();
  }
};

// operationsの値を読み取って即座に動作する。
// AC, C, %, =
const operationsAction = () => {
  switch (operations) {
    case "AC":
      totalNumberReset();
      inputNumberReset();
      operationsReset();
      break;
    case "C":
      inputNumberReset();
      operationsReset();
      break;
    case "%":
      if (inputNumber !== "") {
        inputNumber = Number(inputNumber) / 100;
        operationsReset();
      }
      break;
    case "=":
      calcAction();
      // operationsReset();
      break;
  }
};

// 数字が押された場合の処理
inputNumbersBtn.forEach((val) => {
  val.addEventListener("click", () => {
    if (totalNumber === 0 && operations !== "") {
      totalNumber = inputNumber;
      inputNumberReset();
    }
    totalNumberConnect(val.textContent);
    output.value = inputNumber;
  });
});

// 数字以外が押された場合の処理
inputOperationsBtn.forEach((val) => {
  val.addEventListener("click", () => {
    if (operations === "") {
      operations = val.textContent;
      operationsAction();
    } else {
      calcAction();
      operations = val.textContent;
      operationsAction();
    }
    output.value = totalNumber;
  });
});
