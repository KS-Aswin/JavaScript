function charAt() {
    	var str = document.getElementById("str").value.trim();
    
    	if (str == "") {
        	alert("Please enter a value!");
        	return;
    	}
    
    	if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }

    	var result = str.charAt(0);
        	
	document.getElementById("result").innerHTML = "Character at first of the String : "+result;
    	
}
