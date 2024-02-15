function concat() {
    	var str1 = document.getElementById("str1").value.trim();
    	var str2 = document.getElementById("str2").value.trim();
    
    	if (str1 == "" || str2 =="") {
        	alert("Please enter a value!");
        	return;
    	}
    
    	if (!isNaN(str1) || !isNaN(str2)) {
        	alert("Please enter a String!");
        	return;
    	}

    	var concat = str1.concat(str2);
        	
	document.getElementById("result").innerHTML = "Strings after Concatinating : "+concat;
    	
}
