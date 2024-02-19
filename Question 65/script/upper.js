function change() {
    	var str = document.getElementById("str").value.trim();

    	if (str == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (/\d/.test(str)) {
        alert("Please enter strings containing only letters!");
        return;
    }
	
	var strAfter="";

	for(var i=0;i<str.length;i++){
		var char=str.charAt(i);
		if(char==char.toUpperCase()){
			strAfter += char.toLowerCase();
		}else{
			strAfter += char.toUpperCase();
		}
	}
	
        document.getElementById("result").innerHTML = "The String " + str + " after changed Uppercase character to Lowercase and viceversa : "+strAfter;
}
