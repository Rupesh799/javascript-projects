function gethistory() {
    return document.getElementById('history-value').innerHTML;
}

function printhistory(num) {
    document.getElementById('history-value').innerHTML = num;
}
function getoutput() {
    return document.getElementById('output-value').innerHTML;
}
function printoutput(num) {
    if (num == "") {
        document.getElementById('output-value').innerHTML = num;
    }
    else {
        document.getElementById('output-value').innerHTML = formattedoutput(num);
    }
}
function formattedoutput(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
function reverseoutput(num) {
    return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printhistory("");
            printoutput("");
        }
        else if (this.id == "back") {
            let
                output = reverseoutput(getoutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printoutput(output);
            }
        }
        else {
            let history = gethistory();
            let output = getoutput();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output ==""?
                    output : reverseoutput(output);
                history = history + output;

                if (this.id == "=") {
                    let result = eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else {
                    history = history + this.id;
                    printhistory(history);
                    printoutput("");
                }
            }
        }
    });


}



let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = reverseoutput(getoutput());
        if (output != NaN) {
            output = output + this.id;
            printoutput(output);
        }

    });
}
