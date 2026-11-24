let allMethods = {"÷":"/","×":"*" }
function init(){
    let buttons = document.getElementsByTagName("button");
    

    for(var counter = 0; counter < buttons.length; counter++){
        buttons[counter].addEventListener("click", onClick)
    }
}
function onClick(event) {
    let value = event.currentTarget.textContent;
    let display = document.getElementById("display");

    if (value === "C") {
        console.log("C")
        display.textContent = "";
    } 
    else if (value === "=") {
        console.log("=")
            let expression = display.textContent;

    for (let sign in allMethods) {
        expression = expression.replaceAll(sign, allMethods[sign]);
    }

    display.textContent = eval(expression);
    }    
    else {
        console.log("else")
        display.textContent += value;
        }
}

    window.onload = init;