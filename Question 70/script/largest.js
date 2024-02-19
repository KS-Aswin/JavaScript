function change() {
    var str = document.getElementById("str").value.trim();

    if (str == "") {
        alert("Please enter a string!");
        return;
    }
    if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }
    var words = str.split(/\s+/);

    var largestWords = new Set([words[0]]); // Initialize with the first word
    var smallestWords = new Set([words[0]]); // Initialize with the first word

    words.forEach(function(word) {
        if (word.length > largestWords.values().next().value.length) {
            largestWords.clear();
            largestWords.add(word);
        } else if (word.length === largestWords.values().next().value.length) {
            largestWords.add(word);
        }
        if (word.length < smallestWords.values().next().value.length) {
            smallestWords.clear();
            smallestWords.add(word);
        } else if (word.length === smallestWords.values().next().value.length) {
            smallestWords.add(word);
        }
    });

    document.getElementById("result").innerHTML = "Largest word(s): " + Array.from(largestWords).join(", ") + "<br>Smallest word(s): " + Array.from(smallestWords).join(", ");
}
