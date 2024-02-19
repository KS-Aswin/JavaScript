 function calculatePro() {

	var num = document.getElementById("num").value.trim();
	
	if (num == "" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(num) ){
		alert("Enter numeric values!...");
		return;
	}

	var n=parseFloat(num);

	var sum = 1;
	while (n){
		sum *= n % 10;
		n = Math.floor(n/10);
	}

	document.getElementById("result").innerHTML = "Product of the Digits of Given Number is : " + sum;
}