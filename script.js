const numbers = []
const operators = []

function init(){
    let buttons = document.getElementsByTagName("button");

    for(var counter = 0; counter < buttons.length; counter++){
        buttons[counter].addEventListener("click", appendValue)
    }
}
function appendValue(event) {
    let value = event.currentTarget.textContent;
    console.log(event.currentTarget.textContent);
    numbers.push(value)
    console.log(numbers);


    return numbers;
}
window.onload = init;