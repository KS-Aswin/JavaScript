function missing() {
    	var str = document.getElementById("str").value.trim();

    	if (str == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }

    	var sortedStr = str.split('').sort().join('');
    	var startChar = sortedStr.charAt(0);
   	var endChar = sortedStr.charAt(sortedStr.length - 1);

    	var missing = '';
    	for (var i = startChar.charCodeAt(0); i < endChar.charCodeAt(0); i++) {
        	if (!sortedStr.includes(String.fromCharCode(i))) {
            	missing += String.fromCharCode(i) + "  ";
        	}
    	}

    	if (missing.length == 0) {
        document.getElementById("result").innerHTML = "There is no missing letter!";
    	} else {
        	document.getElementById("result").innerHTML = "The missing letters between " + startChar + " and " + endChar + " are: " + missing;
    	}
}
