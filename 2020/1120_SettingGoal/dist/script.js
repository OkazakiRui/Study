var options = document.querySelectorAll("option");
var optionVal = [];
var example = document.getElementById("example");
// const select = <NodeList>document.querySelectorAll("option")!;
var results = document.getElementById("results");
// options.forEach((value: HTMLSelectElement, i: number) => {
//   optionVal[i] = value.value;
// });
options.forEach(function (value) {
    optionVal.push(value.value);
});
example.addEventListener("change", function (e) {
    if (e.target instanceof HTMLSelectElement) {
        var change = e.target.value;
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
        for (var i = 0; i < optionVal.length; i++) {
            switch (change) {
                case optionVal[i]:
                    results.textContent = optionVal[i] + "が選択されてます";
                    break;
            }
        }
        console.dir(e.target.value);
    }
});
