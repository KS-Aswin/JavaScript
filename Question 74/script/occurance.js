function occurance() {
    var str = document.getElementById("str").value.trim();

    if (str == "") {
        alert("Please enter a value!");
        return;
    }
    if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }

    var counts = {};

    str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);

        if (/^[a-zA-Z]$/.test(char)) {
            if (counts[char]) {
                counts[char]++;
            } else {
                counts[char] = 1;
            }
        }
    }

    var result = "Occurrences of each alphabet:<br>";
    var maxOccurrence = 0;
    var maxChars = [];

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < alphabet.length; i++) {
        var key = alphabet[i];
        var count = counts[key] || 0;

        if (count > 0) {
            result += key + ": " + count + "<br>";

            if (count === maxOccurrence) {
                maxChars.push(key);
            } else if (count > maxOccurrence) {
                maxOccurrence = count;
                maxChars = [key];
            }
        }
    }

    result += "<br>Alphabet(s) with maximum occurrence(s) is/are : " + maxChars.join(", ");

    document.getElementById("result").innerHTML = result;
}
