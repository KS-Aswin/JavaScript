function printFactor() {
    var num = document.getElementById("num").value.trim();

    if (num == "" || num < 0) {
        alert("Please enter a value greter than 0!");
        return;
    }

    if (isNaN(num)) {
        alert("Enter numeric values!");
        return;
    }

    if (num == 0) {
	document.getElementById("result").innerHTML = "Factor of the number 0 is Zero!";
       
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
