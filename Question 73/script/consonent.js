function consonent() {
	var val = document.getElementById("val").value.trim();

    	if (val == "") {
        	alert("Please enter a value!");
        	return;
    	}
if (/\d/.test(val)) {
        alert("Please enter strings containing only letters!");
        return;
    }


    	var newStr = '';
    

    	for (var i = 0; i < val.length; i++) {
        	if ((/[aeiouAEIOU]/.test(val[i]))) {
            	newStr += val[i];
        	}
    	}

    	document.getElementById("result").innerHTML = "The String " + val + " after deleting the Consonants is : " + newStr;
}
