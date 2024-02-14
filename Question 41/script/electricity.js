function calculateBill() {
	var units = document.getElementById("units").value.trim();

	if (units =="") {
		alert("Please enter values!");
		return;
	}


	if (isNaN(units) || units <= 0) {
                alert("Please enter a valid number of units consumed!");
                return;
	}

	var u=parseFloat(units);	

	var totalCharge;

	if (u <= 50) {
                totalCharge = u * 2.60;
	} else if (u <= 100) {
                totalCharge = (50 * 2.60) + ((u - 50) * 3.25);
	} else if (u <= 200) {
                totalCharge = (50 * 2.60) + (50 * 3.25) + ((u - 100) * 5.65);
	} else {
                totalCharge = (50 * 2.60) + (50 * 3.25) + (100 * 5.65) + ((units - 200) * 7.25);
	}

	if (u > 700) {
                var tariffCharge = totalCharge * 0.005;
                totalCharge += tariffCharge;
	}

	document.getElementById("result").innerHTML = "Total Electricity Bill: Rs. " + totalCharge.toFixed(2);
}