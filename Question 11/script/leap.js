 function checkLeapYear() {
	var year = document.getElementById("year").value.trim();
	
	if (year == "" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(year)){
		alert("Enter numeric values!...");
		return;
	}

	var y=parseFloat(year);	

	if ( (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)){
		document.getElementById("result").innerHTML = "The Given Year is Leap Year...";
	}else{
		document.getElementById("result").innerHTML = "The Given Year is not Leap Year...";
	}

}