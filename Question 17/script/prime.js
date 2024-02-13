 function prime() {

	var num = parseFloat(document.getElementById("num").value);

	if ( isNaN(num) ){
		alert("Enter numeric Values!...");
		return;
	}
	
	if ( num <= 1 ){
		document.getElementById("result").innerHTML = "The number is not Prime!...";
		return;
	} 
	for ( var i = 2; i < num; i++ ){
		if ( num % i === 0 ){			
			document.getElementById("result").innerHTML = "The number is not Prime!...";
			return;
		}
	}
	document.getElementById("result").innerHTML = "The number is a Prime Number!...";	
}