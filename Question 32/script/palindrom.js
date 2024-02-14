function checkPal() {
    	var str = document.getElementById("str").value.trim();
    
    	if (str === "") {
        	alert("Please enter a value!");
        	return;
    	}
    
    	if (!isNaN(str)) {
        	alert("Please enter a String!");
        	return;
    	}

    	var lowerCaseStr = str.toLowerCase();

    	var revStr = lowerCaseStr.split('').reverse().join('');

    	if (lowerCaseStr == revStr) {
        	document.getElementById("result").innerHTML = "The given string is a palindrome!";
    	} else {
        	document.getElementById("result").innerHTML = "The given string is not a palindrome!";
    	}
}
