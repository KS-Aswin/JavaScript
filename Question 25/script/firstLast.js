function firstLast() {
    	var num = document.getElementById("num").value.trim();

    	if (num == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (isNaN(num)) {
        	alert("Enter numeric values!");
        	return;
    	}

    	var n = parseFloat(num).toString();
	var first = n[0];
	var last = n[n.length-1];

	document.getElementById("firstDigit").innerHTML="First Digit is : "+first;

	document.getElementById("lastDigit").innerHTML="Last Digit is : "+last;
}