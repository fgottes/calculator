import { createElement } from "../../utils/createElement.js";

export function createCalculator() {
  // const headline = createElement("h2", {
  //   innerText: "Calculator",
  // });

  let firstValue = 0;
  let secondValue = 0;
  let operatorValue = null;
  let hasCalculated = false;

  const result = createElement("input", {
    type: "text",
    value: "",
    placeholder: "0",
  });

  const numberButton = (number) =>
    createElement("button", {
      innerText: number,
      value: number,
      onclick: () => {
        if (hasCalculated) {
          result.value = number;
        } else {
          result.value = result.value + number;
        }

        if (operatorValue === null) {
          firstValue = result.value;
        } else {
          secondValue = result.value;
        }

        hasCalculated = false;
      },
    });

  const operatorButton = (operator) =>
    createElement("button", {
      innerText: operator,
      value: operator,
      onclick: () => {
        operatorValue = operator;
        result.value = "";
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
      firstValue = 0;
      secondValue = 0;
      operatorValue = null;
      result.value = "";
    },
  });
  const buttonResult = createElement("button", {
    innerText: "=",
    value: "=",
    onclick: function () {
      result.value = calculate(+firstValue, +secondValue, operatorValue);
      operatorValue = null;
      firstValue = result.value;
      hasCalculated = true;
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
      numberButton(1),
      numberButton(2),
      numberButton(3),
      numberButton(4),
      numberButton(5),
      numberButton(6),
      numberButton(7),
      numberButton(8),
      numberButton(9),
      numberButton(0),
      operatorButton("+"),
      operatorButton("-"),
      operatorButton("*"),
      operatorButton("/"),
      buttonPoint,
      buttonReset,
      buttonResult,
    ],
  });
}

function calculate(number1, number2, operator) {
  if (operator === "+") {
    return number1 + number2;
  }

  if (operator === "-") {
    return number1 - number2;
  }

  if (operator === "*") {
    return number1 * number2;
  }

  if (operator === "/") {
    return number1 / number2;
  }
}
