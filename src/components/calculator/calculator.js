import { createElement } from "../../utils/createElement.js";

function createButtonElement(buttonName) {
  return createElement("button", {
    innerText: buttonName,
    value: buttonName,
  });
}

export function createCalculator() {
  const headline = createElement("h2", {
    innerText: "Calculator",
  });

  const button1 = createButtonElement(1);
  const button2 = createButtonElement(2);
  const button3 = createButtonElement(3);
  const button4 = createButtonElement(4);
  const button5 = createButtonElement(5);
  const button6 = createButtonElement(6);
  const button7 = createButtonElement(7);
  const button8 = createButtonElement(8);
  const button9 = createButtonElement(9);
  const button0 = createButtonElement(0);
  const buttonPlus = createButtonElement("+");
  const buttonMinus = createButtonElement("-");
  const buttonMulti = createButtonElement("*");
  const buttonDiv = createButtonElement("/");
  const buttonPoint = createButtonElement(".");

  return createElement("div", {
    className: "calculator",
    children: [
      headline,
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
    ],
  });
}
