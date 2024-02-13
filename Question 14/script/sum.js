 function calculateSum() {

	var num = parseFloat(document.getElementById("num").value);

	var sum = 0;
	while (num){
		sum += num % 10;
		num = Math.floor(num/10);
	}

	if ( isNaN(num) ){
		alert("Enter numeric values!...");
		return;
	}

	document.getElementById("result").innerHTML = "Sum of the Digits of Given Number is : " + sum;
}