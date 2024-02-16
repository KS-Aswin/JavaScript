function change() {
    var str = document.getElementById("str").value.trim();

    if (str === "") {
        alert("Please enter a value!");
        return;
    }

    if (!isNaN(str)) {
        alert("Please enter a String!");
        return;
    }

    var modifiedStr = "";
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
            var charCode = str.charCodeAt(i);
            if (char === 'z' || char === 'Z') {
                modifiedStr += String.fromCharCode(charCode - 25);
            } else {
                modifiedStr += String.fromCharCode(charCode + 1);
            }
        } else {
            modifiedStr += char;
        }
    }

    document.getElementById("result").innerHTML = "Modified string: " + modifiedStr;
}
