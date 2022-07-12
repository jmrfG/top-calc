const operator = document.querySelector(".operators");
const preview = document.querySelector(".preview");
const result = document.querySelector(".result");
const opBttns = document.querySelectorAll(".oBttn");

const arithmeticOps = ["+", "-", "÷", "x"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

let x = 0;
let y = 0;
let sum = 0;
let lastOp = null;

function getOperands(text, op) {
    let operands = text.split(op)
    return [parseInt(operands[0]), parseInt(operands[1])]
}


function builtinAdd(x, y) {
    return x + y;
}

function builtinSubtract(x, y) {
    return x - y;
}

function builtinMult(x, y) {
    return x * y;
}

function builtinDiv(x, y) {
    if (y != 0) {
        return x / y;
    } else {
        return "Undefined";
    }
}


function builtinOps(x, y, op) {
    x = parseInt(x);
    y = parseInt(y);
    switch (op) {
        case "+":
            return builtinAdd(x, y);
        case "-":
            return builtinSubtract(x, y);
        case "x":
            return builtinMult(x, y);
        case "÷":
            return builtinDiv(x, y);
    }
}

function evall(i, op) {
    if (x == 0 & y == 0) {
        x = i;
    } else if (x != 0 && y == 0) {
        y = i;
    } else {
        sum = builtinOps(x, y, op);
        x = sum;
        y = i;
    }
}

function inputHandler(i) {
    if (arithmeticOps.includes(i)) {
        lastOp = i;
    } else if (numbers.includes(i)) {
        return evall(i, lastOp)
    } else if (i == "=") {
        console.log(sum);
    }
}

opBttns.forEach((b) => {
    b.addEventListener("click", () => {
        inputHandler(b.value)
        console.log(x, y, sum)
    })
})