const options = document.querySelectorAll("option")! as NodeList;
const optionVal: string[] = [];
const example = document.getElementById("example")! as HTMLSelectElement;
// const select = <NodeList>document.querySelectorAll("option")!;
const results = document.getElementById("results") as HTMLSelectElement;

// options.forEach((value: HTMLSelectElement, i: number) => {
//   optionVal[i] = value.value;
// });
options.forEach((value: HTMLSelectElement) => {
  optionVal.push(value.value);
});

example.addEventListener("change", (e) => {
  if (e.target instanceof HTMLSelectElement) {
    const change = e.target.value;
    switch (change) {
      case optionVal[0]:
        results.textContent = optionVal[0] + "が選択されてます";
        break;
      case optionVal[1]:
        results.textContent = optionVal[1] + "が選択されてます";
        break;
      case optionVal[2]:
        results.textContent = optionVal[2] + "が選択されてます";
        break;
      case optionVal[3]:
        results.textContent = optionVal[3] + "が選択されてます";
        break;
      case optionVal[4]:
        results.textContent = optionVal[4] + "が選択されてます";
        break;
      case optionVal[5]:
        results.textContent = optionVal[5] + "が選択されてます";
        break;
    }

    for (let i = 0; i < optionVal.length; i++) {
      switch (change) {
        case optionVal[i]:
          results.textContent = optionVal[i] + "が選択されてます";
          break;
      }
    }
    console.dir(e.target.value);
  }
});
