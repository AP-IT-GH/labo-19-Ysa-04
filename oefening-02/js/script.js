let modifyString = (inputString, callbackFn) => {
    let stringLength = inputString.length;
    callbackFn(stringLength);
}

function printToConsole(result) {
    console.log("De lengte van de string is " + result);
}

modifyString("Yeetus", printToConsole);