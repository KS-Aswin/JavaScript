 function checkEvenOrOdd() {
	var num = parseFloat(document.getElementById("num").value);

	if ( isNaN(num)){
		alert("Enter numeric values!...");
	}

	if ( num % 2 == 0){
		document.getElementById("result").innerHTML = "The Given Number is Even...";
	}else{
		document.getElementById("result").innerHTML = "The Given Number is Odd...";
	}

}