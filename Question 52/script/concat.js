function concat() {
    var str1 = document.getElementById("str1").value.trim();
    var str2 = document.getElementById("str2").value.trim();

    if (str1 == "" || str2 == "") {
        alert("Please enter a value!");
        return;
    }

    if (/\d/.test(str1) || /\d/.test(str2)) {
        alert("Please enter strings containing only letters!");
        return;
    }

    var concat = str1 + str2;

    document.getElementById("result").innerHTML = "Strings after Concatenating : " + concat;
}
