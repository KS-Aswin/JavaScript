 function checkEvenOrOdd() {
	var num = document.getElementById("num").value.trim();
	
	if (num == "" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(num)){
		alert("Enter numeric values!...");
		return;
	}

	var n=parseFloat(num);

	if ( n % 2 == 0){
		document.getElementById("result").innerHTML = "The Given Number is Even...";
	}else{
		document.getElementById("result").innerHTML = "The Given Number is Odd...";
	}

}