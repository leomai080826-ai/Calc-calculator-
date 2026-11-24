let specialOperations = {"÷": "/", "×": "*", "√": "sqrt", "π":"pi"};

function init(){
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

        display.textContent = math.format(math.evaluate(expression), { precision: 12 });
    }
    else {
        display.textContent += value;
    }
}

window.onload = init;