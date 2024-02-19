function reverseNum() {
    var num = document.getElementById("num").value.trim();

    if (num == "") {
        alert("Please enter a value!");
        return;
    }

    if (isNaN(num)) {
        alert("Enter numeric values only!");
        return;
    }

    var reversedNum = '';
    var numStr = num.toString();

    for (var i = numStr.length - 1; i >= 0; i--) {
        reversedNum += numStr[i];
    }

    document.getElementById("result").innerHTML = "Reversed Number is : " + reversedNum;
}
