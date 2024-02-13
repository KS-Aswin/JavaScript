 function calculateArea() {
	var pi = 3.14;
	var area = parseFloat(document.getElementById("area").value);

	var result = parseFloat(pi * area * area);

	if ( isNaN(area)){
		alert("Enter numeric values!...");
	}

	document.getElementById("result").innerHTML = "Area of Circle : " + result;
}