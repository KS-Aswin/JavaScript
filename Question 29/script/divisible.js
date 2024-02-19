function divisibleNumber() {
    var num = document.getElementById("num").value.trim();

    if (num == "") {
        alert("Please enter a value!");
        return;
    }

    if (isNaN(num)) {
        alert("Enter numeric values!");
        return;
    }

    var n = parseFloat(num);
    var output = ""; 

    for (var i = 1; i <= n; i++) {
        if (i % 5 == 0 && i % 11 == 0) {
            output += i + "  ";
        }
    }

    if (output.length == 0) {
        document.getElementById("result").innerHTML = "There is no number divisible by 5 and 11 below "+num+"!";
    } else {
        document.getElementById("result").innerHTML ="Divisibles are : "+ output;
    }
}
