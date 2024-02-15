function calculateCylinder() {
    	var radius = document.getElementById("radius").value.trim();
    	var height = document.getElementById("height").value.trim();

    	if (radius == "" || height == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (isNaN(radius) || radius <= 0 || isNaN(height) || height <= 0 ) {
        	alert("Please enter a numeric value!");
        	return;
    	}

    	var r = parseFloat(radius);
    	var h = parseFloat(height);
	var pi=3.14;

    	var sA = (2 * pi * r * r) + (2 * pi * r * h);
    	var v = pi * r * r * h;
    	var lS = 2 * pi * r * h;
	var tBSa = pi * r * r;

    	document.getElementById("surface").innerHTML = "Surface Area of cylinder : " + sA.toFixed(2);
    	document.getElementById("volume").innerHTML = "Volume of cylinder : " + v.toFixed(2);
    	document.getElementById("lateral").innerHTML = "Lateral Surface Area of cylinder : " + lS.toFixed(2);
    	document.getElementById("topBottom").innerHTML = "Top/Bottom Surface Area of cylinder : " + lS.toFixed(2);
}
