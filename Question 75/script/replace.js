function replacePalindromes() {
    	var str = document.getElementById("str").value.trim();

    	if (str == "") {
        	alert("Please enter a value!");
        	return;
    	}
    	if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }

    	var words = str.split(" ");
    	var result = "";

    	for (var i = 0; i < words.length; i++) {
        	var word = words[i];


        	if (isPalindrome(word)) {
            	for (var j = 0; j < word.length; j++) {
                	result += "*";
            	}
        	} else {
            	result += word;
        	}

        	if (i < words.length - 1) {
            	result += " ";
        	}
    	}

    	document.getElementById("result").innerHTML = result;
	}

function isPalindrome(word) {

    	return word === word.split("").reverse().join("");
}
