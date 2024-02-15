function occurance() {
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

    	var count = 0;

    	for (var i = 0; i < str1.length; i++) {
        	if (str2 == str1.charAt(i)) {
            	count++;
        }
}

    if (count != 0) {
        document.getElementById("result").innerHTML = "The occurance of character " + str2 + " is : " + count;
    } else {
        document.getElementById("result").innerHTML = "Character is not Present : ";
    }
}
