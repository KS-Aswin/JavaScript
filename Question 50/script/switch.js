var exited = false; // Flag to track if option 5 was chosen

function showInputs() {
    var option = document.getElementById("selectOption").value.trim();

    if (option == "") {
        alert("Enter values!");
        return;
    }

    if (isNaN(option)) {
        alert("Enter numeric values!");
        return;
    }

    if (option < 1 || option > 5) {
        alert("Enter values between 1 and 5!");
        return;
    }

    if (option == 5) {
        document.getElementById("result").innerHTML = "Exit";
        setTimeout(function() {
            document.getElementById("result").innerText = "";
        }, 3000);
        exited = true; // Set the flag to true
        clearInputFields(); // Clear input fields
        return;
    }

    if (exited) { // Check if option 5 was previously chosen
        document.getElementById("result").innerHTML = "You already exited the program";
        return;
    }

    document.getElementById("inputFields").style.display = "block";
    clearInputFields(); // Clear input fields
}

function calculate() {
    var option = document.getElementById("selectOption").value.trim();
    var num1 = document.getElementById("num1").value.trim();
    var num2 = document.getElementById("num2").value.trim();

    if (num1 == "" || num2 == "") {
        alert("Enter values!");
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter numeric values values!");
        return;
    }

    var o = parseFloat(option);
    var n1 = parseFloat(num1);
    var n2 = parseFloat(num2);

    if (exited) { // Check if option 5 was previously chosen
        document.getElementById("result").innerHTML = "You already exited the program";
        return;
    }

    var result;

    switch (o) {
        case 1:
            result = n1 + n2;
            break;
        case 2:
            result = n1 - n2;
            break;
        case 3:
            result = n1 * n2;
            break;
        case 4:
            if (n2 !== 0) {
                result = (n1 / n2).toFixed(2);
            } else {
                result = "Cannot divide by zero!";
            }
            break;
        case 5:
            result = "You already exited the program";
            break;
    }

    document.getElementById("result").innerText = "Result: " + result;

    if (o !== 5) {
        document.getElementById("inputFields").style.display = "none";
        clearInputFields(); // Clear input fields
        setTimeout(function() {
            document.getElementById("result").innerText = "";
        }, 3000);
    }
}

function clearInputFields() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
