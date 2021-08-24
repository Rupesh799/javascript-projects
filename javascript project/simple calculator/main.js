let outputDisplay = document.getElementById('output');

function display(num) {
    outputDisplay.value += num;

}
function calculate() {
    try {
        outputDisplay.value = eval(outputDisplay.value);
    }
    catch (err) {
        alert("invalid expression!!!");
    }
}
function Clear() {
    outputDisplay.value = "";
}

function del() {
    outputDisplay.value = outputDisplay.value.slice(0, -1);
}