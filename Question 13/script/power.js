 function calculatePower() {

	var base = parseFloat(document.getElementById("num1").value);

	var exponent = parseFloat(document.getElementById("num2").value);

	var result = parseFloat(Math.pow(base, exponent));

	if ( isNaN(base) || isNaN(exponent) || isNaN(result)){
		alert("Enter numeric values!...");
		return;
	}

	document.getElementById("result").innerHTML = "Power of the Given Number is : " + result;
}