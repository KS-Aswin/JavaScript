function strLen() {
    	var str = document.getElementById("str").value.trim();

    	if (str == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (!isNaN(str)) {
        	alert("Please enter a String!");
        	return;
    	}

    	
	var count = 0;
    	for (var i = 0; i < str.length; i++) {
        	count++;
    	}
    	document.getElementById("withoutLen").innerHTML = "Length of string without using Len() is : "+count;
    	document.getElementById("withLen").innerHTML = "Length of string by using Len() is : "+str.length;
}
