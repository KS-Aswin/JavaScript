 function calculatePower() {

	var base = document.getElementById("num1").value.trim();

	var exponent = document.getElementById("num2").value.trim();
	
	if (base == "" || exponent == "" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(base) || isNaN(exponent)){
		alert("Enter numeric values!...");
		return;
	}

	var b=parseFloat(base);
	var e=parseFloat(exponent);

	var result = parseFloat(Math.pow(b, e));

	document.getElementById("result").innerHTML = "Power of the Given Number is : " + result;
}