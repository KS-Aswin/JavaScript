 function checkLeapYear() {
	var year = parseFloat(document.getElementById("year").value);

	if ( isNaN(year)){
		alert("Enter numeric values!...");
		return;
	}

	if ( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
		document.getElementById("result").innerHTML = "The Given Year is Leap Year...";
	}else{
		document.getElementById("result").innerHTML = "The Given Year is not Leap Year...";
	}

}