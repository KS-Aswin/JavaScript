function printFactorial() {
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
	var sum=1;

    	if (n == 0){
		document.getElementById("result").innerHTML = "Factorial of " + n + " is 1";
	}else{
		for(var i=1; i <= n; i++){
			sum *=i;
		}
		document.getElementById("result").innerHTML = "Factorial of " + n + " is : "+sum;
    	}
}