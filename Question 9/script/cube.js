 function calculateCube() {
	var num = document.getElementById("num").value.trim();
	
	if (num == "" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(num)){
		alert("Enter numeric values!...");
		return;
	}

	var n=parseFloat(num);

	var result = n * n * n;

	document.getElementById("result").innerHTML = "Cube of the Given Number is : " + result;
}