function change() {
    var str = document.getElementById("str").value.trim();

    if (str == "") {
        alert("Please enter a string!");
        return;
    }

    var words = str.split(/\s+/);

    var largestWord = '';
    var smallestWord = '';

    words.forEach(function(word) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
        if (smallestWord.length === 0 || word.length < smallestWord.length) {
            smallestWord = word;
        }
    });

    document.getElementById("result").innerHTML = "Largest word: " + largestWord + "<br>Smallest word: " + smallestWord;
}
