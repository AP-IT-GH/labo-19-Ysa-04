let createCalculator = (operator) => {
    if (operator === "add") {
        return function (a, b, callbackFn) {
            const result = a + b;
            callbackFn(result); 
        };
    }
    if (operator === "multiply") {
        return function (a,b,callbackFn) {
            const result = a * b;
            callbackFn(result);
        }
    }
}

function printToConsole(result) {
  console.log("Het resultaat is " + result);
}
const addCalculator = createCalculator("add");
addCalculator(6, 9, printToConsole);

const multiplyCalculator = createCalculator("multiply");
multiplyCalculator(10, 2, printToConsole);