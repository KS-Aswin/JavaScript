function specific() {
    	var str1 = document.getElementById("str1").value.trim();
    	var str2 = document.getElementById("str2").value.trim();

    	if (str1 == "" || str2 == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (!isNaN(str1) || !isNaN(str2)) {
        	alert("Please enter a String!");
        	return;
    	}

    	var pos = -1;

    	for (var i = 0; i < str1.length; i++) {
        	if (str2 == str1.charAt(i)) {
            	pos = str1.indexOf(str1.charAt(i));
        }
}

    if (pos != -1) {
        document.getElementById("result").innerHTML = "Index of the searched character is : " + pos;
    } else {
        document.getElementById("result").innerHTML = "Character is not Present : ";
    }
}
