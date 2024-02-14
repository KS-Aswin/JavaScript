function naturalNumbers() {
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

    if (n < 1) {
        alert("Entered number is not a Natural Number!..");
        return;
    }

    var result = "";
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        result += i + " ";
        sum += i;
    }

    var avg = sum / n;

    document.getElementById("sum").innerHTML = "Sum of Natural Numbers from 1 to " + n + " is : " + sum;
    document.getElementById("avg").innerHTML = "Average of Natural Numbers from 1 to " + n + " is : " + avg;
}
