import { createElement } from "../../utils/createElement.js";

const addButton = createElement("button", {
  innerText: "+",
  className: "mathButton",
  onclick: function () {
    result.value = Number(result.value);
  },
});

export function createCalculator() {
  // const headline = createElement("h2", {
  //   innerText: "Calculator",
  // });

  const result = createElement("input", {
    type: "text",
    value: "",
    placeholder: "0",
  });

  const button1 = createElement("button", {
    innerText: "1",
    value: "1",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button2 = createElement("button", {
    innerText: "2",
    value: "2",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button3 = createElement("button", {
    innerText: "3",
    value: "3",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button4 = createElement("button", {
    innerText: "4",
    value: "4",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button5 = createElement("button", {
    innerText: "5",
    value: "5",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button6 = createElement("button", {
    innerText: "6",
    value: "6",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button7 = createElement("button", {
    innerText: "7",
    value: "7",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button8 = createElement("button", {
    innerText: "8",
    value: "8",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button9 = createElement("button", {
    innerText: "9",
    value: "9",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const button0 = createElement("button", {
    innerText: "0",
    value: "0",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const buttonPlus = createElement("button", {
    innerText: "+",
    value: "+",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const buttonMinus = createElement("button", {
    innerText: "-",
    value: "-",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const buttonMulti = createElement("button", {
    innerText: "*",
    value: "*",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const buttonDiv = createElement("button", {
    innerText: "/",
    value: "/",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const buttonPoint = createElement("button", {
    innerText: ".",
    value: ".",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const buttonReset = createElement("button", {
    innerText: "AC",
    value: "0",
    onclick: function () {
      result.value = "";
    },
  });
  const buttonResult = createElement("button", {
    innerText: "=",
    value: "=",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });

  return createElement("div", {
    className: "calculator",
    children: [
      createElement("p", {
        innerText: "CALCULATOR",
        className: "headline",
      }),
      result,
      button1,
      button2,
      button3,
      button4,
      button5,
      button6,
      button7,
      button8,
      button9,
      button0,
      buttonPlus,
      buttonMinus,
      buttonMulti,
      buttonDiv,
      buttonPoint,
      buttonReset,
      buttonResult,
    ],
  });
}
