const heading = (str) => {
  if (str) {
    console.log(
      `_________________________________ ${str} _________________________________`
    );
  } else {
    console.log(
      "__________________________________________________________________"
    );
  }
};
// 比較
const comparison = (n1, n2) => {
  if (n1 !== n2) {
    if (n1 > n2) {
      console.log("num1が大きい");
    } else {
      console.log("num2が大きい");
    }
  } else {
    console.log("等しい");
  }
};
heading("比較");
comparison(123, 1);
comparison(1, 123);
comparison(123, 123);

// 最大値
const max = (nums) => {
  let result = 0;
  nums.forEach((num) => {
    if (result !== 0) {
      if (result < num) {
        result = num;
      }
    } else {
      result = num;
    }
  });
  console.log(result);
};
heading("最大値");
max([321, 324, 131, 476, 342]);
max([0, -342, 1231, 32, 42, 534]);

// リニアサーチ
const linear = (nums, key) => {
  const result = nums.findIndex((num) => num === key);
  if (result !== -1) {
    console.log("index : " + result);
  } else {
    console.log("見つかりませんでした。");
  }
};
// const linear = (nums, key) => {
//   nums.forEach((num, index) => {
//     if (num === key && ) {
//       console.log(index);
//     }
//   });
// };
// const linear = (nums, key) => {
//   nums.some((num, index) => {
//     if (num === key) {
//       console.log("index : " + index);
//     }
//   });
// };
heading("リニアサーチ");
linear([213, 24, 3, 21, 12, 143, 1, 24, 143], 143);
linear([213, 24, 3, 21, 12, 143, 1, 24, 143], 0);

// バイナリサーチ
const binary = (nums, key) => {
  const median = () => {
    return Math.floor((first + last) / 2);
  };
  let first = 0;
  let last = nums.length;
  let center = median();

  while (first < last) {
    if (nums[center] === key || first >= last) {
      console.log(key + "を index :" + center + "番で見つけました");
      break;
    } else {
      if (nums[center] < key) {
        // 探す値の方が大きい時
        first = center;
        center = median();
      } else {
        // 探す値の方が小さい時
        last = center;
        center = median();
      }
    }
  }
};
heading("バイナリサーチ");
binary([1, 21, 34, 64, 76, 98, 130, 321, 341, 432, 564], 1);
binary([1, 21, 34, 64, 76, 98, 130, 321, 341, 432, 564], 21);
binary([1, 21, 34, 64, 76, 98, 130, 321, 341, 432, 564], 98);
binary([1, 21, 34, 64, 76, 98, 130, 321, 341, 432, 564], 432);
binary([1, 21, 34, 64, 76, 98, 130, 321, 341, 432, 564], 564);
