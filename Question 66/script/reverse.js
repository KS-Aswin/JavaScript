function change() {
    var str = document.getElementById("str").value.trim();

    if (str == "") {
        alert("Please enter a value!");
        return;
    }

    if (!isNaN(str)) {
        alert("Please enter a String!");
        return;
    }

    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    var strArray = str.split(''); // Convert the string to an array to make modifications easier
    var start = 0;
    var end = strArray.length - 1;

    while (start < end) {
        while (start < end && !vowels.includes(strArray[start])) {
            start++;
        }
        while (start < end && !vowels.includes(strArray[end])) {
            end--;
        }

        var temp = strArray[start];
        strArray[start] = strArray[end];
        strArray[end] = temp;
        start++;
        end--;
    }

    var strAfter = strArray.join('');

    document.getElementById("result").innerHTML = "The String " + str + " after reversing vowels: " + strAfter;
}
