function calculateInterest() {
    	var principal = parseFloat(document.getElementById("principal").value);
    	var rate = parseFloat(document.getElementById("rate").value);
    	rate = rate / 100;
	var time = parseFloat(document.getElementById("time").value);
    	var compoundFrequency = parseFloat(document.getElementById("compoundFrequency").value);
	if (principal === "" || rate === "" || time === "") {
        alert("Please enter values in all fields!...");
        return;
    }

    	if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compoundFrequency)) {
        	alert("Enter numeric values!...");
        	return;
    	}


    	var amount = principal * Math.pow(1 + rate / compoundFrequency, compoundFrequency * time);

    	var compoundInterest = amount - principal;
	document.getElementById("result").innerHTML = "Compound Interest : " + compoundInterest.toFixed(2);
}
