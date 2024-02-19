 function calculateOperation() {
	var num1 = document.getElementById("num1").value.trim();
	var num2 = document.getElementById("num2").value.trim();
	
	if (num1 == "" || num2 == "" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(num1) || isNaN(num2)){
		alert("Enter numeric values!...");
		return;
	}

	var n1=parseFloat(num1);
	var n2=parseFloat(num2);

	var add = n1 + n2;

	var sub = n1 - n2;

	var mul = n1 * n2;

	var div = n1 / n2;

	document.getElementById("add").innerHTML = "Addition of two numbers : " + add;
	document.getElementById("sub").innerHTML = "Subtraction of two numbers : " + sub;
	document.getElementById("mul").innerHTML = "Multiplication of two numbers : " + mul;
	document.getElementById("div").innerHTML = "Divition of two numbers : " + div;
}