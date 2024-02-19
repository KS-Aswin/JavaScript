 function calculateArea() {
	var pi = 3.14;
	var area = document.getElementById("area").value.trim();

	if (area == "" ) {
        alert("Please enter values in all fields!...");
        return;
    }

	if ( isNaN(area)){
		alert("Enter numeric values!...");
        	return;
	}

	var a=parseFloat(area);

	var result = parseFloat(pi * a * a);

	

	document.getElementById("result").innerHTML = "Area of Circle : " + result.toFixed(2);
}