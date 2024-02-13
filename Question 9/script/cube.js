 function calculateCube() {
	var num = parseFloat(document.getElementById("num").value);

	var result = num * num *num;

	if ( isNaN(num)){
		alert("Enter numeric values!...");
	}

	document.getElementById("result").innerHTML = "Cube of the Given Number is : " + result;
}