function charAt() {
    	var str = document.getElementById("str").value.trim();
    
    	if (str == "") {
        	alert("Please enter a value!");
        	return;
    	}
    
    	if (!isNaN(str)) {
        	alert("Please enter a String!");
        	return;
    	}

    	var result = str.charAt(str.length-1);
        	
	document.getElementById("result").innerHTML = "Character at first of the String : "+result;
    	
}
