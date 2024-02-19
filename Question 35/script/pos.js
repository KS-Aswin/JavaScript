 function posNeg() {

	var num = document.getElementById("num").value.trim();
	
	if (num == "" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(num) ){
		alert("Enter numeric Values!...");
		return;
	}

	var n=parseFloat(num);
	
	if ( n < 0 ){
		document.getElementById("result").innerHTML = "The number is Negative!...";
		return;
	} else if ( n > 0 ){			
		document.getElementById("result").innerHTML = "The number is Positive!...";
	} else if ( n == 0 ){			
		document.getElementById("result").innerHTML = "The number is Zero!...";
	}	
}