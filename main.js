const operator = document.querySelector(".operators");
const preview = document.querySelector(".preview");
const result = document.querySelector(".result");
const opBttns = document.querySelectorAll(".oBttn");
const arithmeticOps = ["+", "-", "÷", "x"];
let lastOp = null;

function getOperands(text, op) {
    let operands = text.split(op)
    return [parseInt(operands[0]), parseInt(operands[1])]
}


//Use builtins
function evaluate(operands, op) {
    switch (op) {
        case "+":
            return operands[0] + operands[1];
        case "-":
            return operands[0] - operands[1];
        case "x":
            return operands[0] * operands[1];
        case "÷":
            return operands[0] / operands[1];
    }
}



opBttns.forEach((b) => {
    b.addEventListener("click", () => {
        if (arithmeticOps.includes(b.value)) {
            lastOp = b.value;
        }
        if (b.value == "=") {
            let values = getOperands(preview.textContent, lastOp)
            console.log(values);
            result.textContent = evaluate(values, lastOp);
            preview.textContent = evaluate(values, lastOp);
        }
        if (b.value != "=") {
            preview.textContent += b.value;
        }
    })
})

