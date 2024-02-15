function calculateSphere() {
    	var radius = document.getElementById("radius").value.trim();

    	if (radius == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (isNaN(radius) || radius <= 0 ) {
        	alert("Please enter a numeric value!");
        	return;
    	}

    	var r = parseFloat(radius);
	var pi=3.14;

    	var sA = (4 * pi * r * r);
    	var v = 4 * pi * r * r * r;

    	document.getElementById("surface").innerHTML = "Surface Area of Sphere : " + sA.toFixed(2);
    	document.getElementById("volume").innerHTML = "Volume of Sphere : " + v.toFixed(2);
}
