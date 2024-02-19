function change() {
    	var val = document.getElementById("val").value.trim();

    	if (val == "") {
        	alert("Please enter a value!");
        	return;
    	}
	
	var character = 0;
    	var digit = 0;
    	var special = 0;

	for(var i=0; i<val.length;i++){
		var char=val.charAt(i);
		if(char.match(/[a-zA-Z]/)){
			character++;
		}else if(char.match(/[0-9]/)){
			digit++;
		}else{
			special++;
		}
	}
	
        document.getElementById("countAlpha").innerHTML = "The entered value contain : " + character + " Characters";
	
        document.getElementById("countDigit").innerHTML = "The entered value contain : " + digit + " Digits";
	
        document.getElementById("countSpecial").innerHTML = "The entered value contain : " + special + " Special Characters";
}
