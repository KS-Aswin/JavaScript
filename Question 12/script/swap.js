 function swapNum() {
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

	var temp = n1;
	n1 = n2;
	n2 = temp;
	document.getElementById("number1").innerHTML = "First number is now : "+n1;
	document.getElementById("number2").innerHTML = "Second number is now : "+n2;

}