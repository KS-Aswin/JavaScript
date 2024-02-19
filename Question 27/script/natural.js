function naturalNumbers() {
    	var num = document.getElementById("num").value.trim();

    	if (num == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (isNaN(num)) {
        	alert("Enter numeric values!");
        	return;
    	}

	var n = parseFloat(num);

    	if (num < 1) {
        	alert("Entered number is not a Natural Number!..");
        	return;
    	}
	var result = "";
    	for (var i = 1; i <= n; i++) {
        	result += i + " ";
   	}
	document.getElementById("result").innerHTML = "Natural numbers from 1 to " + n + " are : " + result;	
}