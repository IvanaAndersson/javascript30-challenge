const button = document.getElementById("button");

button.addEventListener("click", () => {
  const a = parseInt(document.querySelector("#value1").value);
  const b = parseInt(document.querySelector("#value2").value);
  const operatorType = document.querySelector("#operator").value;
  let calculate = 0;

  if (operatorType === "add") {
    calculate = a + b;
  } else if (operatorType === "min") {
    calculate = a - b;
  } else if (operatorType === "mul") {
    calculate = a * b;
  } else {
    calculate = a / b;
  }

  document.querySelector("#result").innerHTML = calculate;
});
