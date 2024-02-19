function charAt() {
    var str = document.getElementById("str").value.trim();
    
    if (str === "") {
        alert("Please enter a value!");
        return;
    }
    
    if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }
    
    var len = str.length;
    if (len % 2 == 0 || len <= 2) {
        document.getElementById("result").innerHTML = "The string has no perfect middle!";
    } else {
        var mid = Math.floor(len / 2);
        var result = str.charAt(mid);
        document.getElementById("result").innerHTML = "Character at middle of the String: " + result;
    }
}
