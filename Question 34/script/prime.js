 function prime() {

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
	
	if ( n <= 1 ){
		document.getElementById("result").innerHTML = "The number is not Prime!...";
		return;
	} 
	for ( var i = 2; i < n; i++ ){
		if ( n % i === 0 ){			
			document.getElementById("result").innerHTML = "The number is not Prime!...";
			return;
		}
	}
	document.getElementById("result").innerHTML = "The number is a Prime Number!...";	
}