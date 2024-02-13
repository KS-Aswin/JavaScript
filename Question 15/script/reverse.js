 function reverseNum() {

	var num = parseFloat(document.getElementById("num").value);

	num = parseFloat(num.toString().split('').reverse().join(''));
	
	if ( isNaN(num)){
		alert("Enter numeric Values!...");
		return;
	}

	document.getElementById("result").innerHTML = "Reversed Number is : " + num;
}