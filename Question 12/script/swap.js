 function swapNum() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	if ( isNaN(num1) || isNaN(num2)){
		alert("Enter numeric values!...");
		return;
	}

	var temp = num1;
	num1 = num2;
	num2 = temp;
	document.getElementById("number1").innerHTML = "First number is now : "+num1;
	document.getElementById("number2").innerHTML = "Second number is now : "+num2;

}