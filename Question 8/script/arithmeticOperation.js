 function calculateOperation() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	var add = num1 + num2;

	var sub = num1 - num2;

	var mul = num1 * num2;

	var div = num1 / num2;

	if ( isNaN(num1) || isNaN(num2)){
		alert("Enter numeric values!...");
	}

	document.getElementById("add").innerHTML = "Addition of two numbers : " + add;
	document.getElementById("sub").innerHTML = "Subtraction of two numbers : " + sub;
	document.getElementById("mul").innerHTML = "Multiplication of two numbers : " + mul;
	document.getElementById("div").innerHTML = "Divition of two numbers : " + div;
}