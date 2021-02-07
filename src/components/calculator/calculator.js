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
    className: "result",
    type: "text",
    value: "",
    placeholder: "0",
  });

  const numberButton = (number) =>
    createElement("button", {
      innerText: number,
      value: number,
      className: "numberButton",
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
      className: "operator",
      innerText: operator,
      value: operator,
      onclick: () => {
        operatorValue = operator;
        result.value = "";
      },
    });

  const buttonPoint = createElement("button", {
    className: "operator",
    innerText: ".",
    value: ".",
    onclick: function () {
      result.value = result.value + this.value;
    },
  });
  const buttonReset = createElement("button", {
    className: "operator",
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
    className: "equal",
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
      result,
      numberButton(7),
      numberButton(8),
      numberButton(9),
      operatorButton("+"),
      numberButton(4),
      numberButton(5),
      numberButton(6),
      operatorButton("-"),
      numberButton(1),
      numberButton(2),
      numberButton(3),
      operatorButton("*"),
      buttonReset,
      numberButton(0),
      buttonPoint,
      operatorButton("/"),
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
