function countDigits() {
    	var num = document.getElementById("num").value.trim();

    	if (num == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (isNaN(num) || num <= 0 ) {
        	alert("Please enter a Number!");
        	return;
    	}

    	var n = parseFloat(num);
	var count=0;
	
	while (n != 0) {
        	n = Math.floor(n / 10);
        	count++;
    	}

    	document.getElementById("count").innerHTML = "Number of digits in the Number " + num + " is : "+count;
}
