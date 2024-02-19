function change() {
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

	var temp = str1;
	str1 = str2;
	str2 = temp;
	
        document.getElementById("result").innerHTML = "The String after swapped";
	
        document.getElementById("string1").innerHTML = "The first String is now : "+str1;
	
        document.getElementById("string2").innerHTML = "The second String is now : "+str2;
}
