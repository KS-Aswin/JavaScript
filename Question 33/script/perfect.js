function chechPerfect() {
    var num = document.getElementById("num").value.trim();

    if (num == "") {
        alert("Please enter a value!");
        return;
    }

    if (isNaN(num) || num <= 0) {
        alert("Please enter a valid Positive Number!");
        return;
    }

    var n = parseFloat(num);

    var sum = 0;

    for (var i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }

    if (sum === n) {
        document.getElementById("result").innerHTML = "The Given Number " + n + " is a Perfect Number";
    } else {
        document.getElementById("result").innerHTML = "The Given Number " + n + " is not a Perfect Number";
    }
}
