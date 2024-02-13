function calculateInterest() {
    var principal =document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;

    
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

    var interest = parseFloat(principal * rate * time) / 100;

    document.getElementById("result").innerHTML = "Simple Interest : " + interest;
}
