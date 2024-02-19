function occurance() {
    	var str1 = document.getElementById("str1").value.toLowerCase().trim();
    	var str2 = document.getElementById("str2").value.toLowerCase().trim();

    	if (str1 == "" || str2 == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (/\d/.test(str1) || /\d/.test(str2)) {
        alert("Please enter strings containing only letters!");
        return;
    }
	

    	if (str1.startsWith(str2)) {
        	document.getElementById("result").innerHTML = "The given character " + str2 + " is a Prefix!";
    	} else {
        	document.getElementById("result").innerHTML = "The given character " + str2 + " is not a Prefix!";
    	} 
}
