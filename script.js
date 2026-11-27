let specialOperations = {"÷": "/", "×": "*", "√": "sqrt", "π":"pi", "sin": "sind", "cos": "cosd", "tan": "tand"};

function init(){
    math.import({
    sind: x => Math.sin(x * Math.PI / 180),
    cosd: x => Math.cos(x * Math.PI / 180),
    tand: x => Math.tan(x * Math.PI / 180),
            })
    let buttons = document.getElementsByTagName("button");

    for(var counter = 0; counter < buttons.length; counter++){
        buttons[counter].addEventListener("click", onClick);
    }
}

function onClick(event) {
    let value = event.currentTarget.textContent;
    let display = document.getElementById("display");

    if  (value === "C") {
        display.textContent = "";
    }
    else if (value === "=") {
        let expression = display.textContent;

        for (let sign in specialOperations) {
            expression = expression.replaceAll(sign, specialOperations[sign]);
        }

        display.textContent = math.format(math.round(math.evaluate(expression), 10), { precision: 12 });
    }
    else {
        display.textContent += value;
    }
}

window.onload = init;