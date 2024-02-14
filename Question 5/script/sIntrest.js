function calculateInterest() {
    var principal =document.getElementById("principal").value.trim();
    var rate = document.getElementById("rate").value.trim();
    var time = document.getElementById("time").value.trim();

    
    if (principal == "" || rate == "" || time == "") {
        alert("Please enter values in all fields!...");
        return;
    }
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Enter numeric values!...");
        return;
    }
	var p=parseFloat(principal);
	var r=parseFloat(rate);
	var t=parseFloat(time);

    var interest = parseFloat(p * r * t) / 100;

    document.getElementById("result").innerHTML = "Simple Interest : " + interest.toFixed(2);
}
