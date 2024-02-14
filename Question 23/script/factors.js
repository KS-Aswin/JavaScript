function printFactor() {
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
    var output = "Factors of " + n + "are : ";

    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            output += i + ", ";
        }
    }

    document.getElementById("result").innerHTML = output;
}
