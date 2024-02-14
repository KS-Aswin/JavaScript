function calculateInterest() {
    	var principal = document.getElementById("principal").value.trim();
    	var rate = document.getElementById("rate").value.trim();
    	rate = rate / 100;
	var time = document.getElementById("time").value.trim();
    	var compoundFrequency = document.getElementById("compoundFrequency").value.trim();
	
	if (principal == "" || rate == "" || time == "" || compoundFrequency =="") {
        	alert("Please enter values in all fields!...");
        	return;
    	}

    	if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compoundFrequency)) {
        	alert("Enter numeric values!...");
        	return;
    	}

	var p=parseFloat(principal);
	var r=parseFloat(rate);
	var t=parseFloat(time);
	var c=parseFloat(compoundFrequency);

    	var amount = p * Math.pow(1 + r / c, c * t);

    	var c = amount - p;
	document.getElementById("result").innerHTML = "Compound Interest : " + c.toFixed(2);
}
