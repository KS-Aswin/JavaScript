function printCharacters() {
    var str = document.getElementById("str").value.trim();

    if (str == "") {
        alert("Please enter a value!");
        return;
    }

    if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }

    var result = "Characters of the string " + str + " are: ";
    for (var i = 0; i < str.length; i++) {
        result += str.charAt(i) + " ";
    }
    document.getElementById("result").innerHTML = result;
}
