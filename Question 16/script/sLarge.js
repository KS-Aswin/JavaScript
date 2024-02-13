 function largestSmallest() {

	var num1 = parseFloat(document.getElementById("num1").value);

	var num2 = parseFloat(document.getElementById("num2").value);

	var num3 = parseFloat(document.getElementById("num3").value);

	var smallest = Math.min(num1, num2, num3); 

	var largest = Math.max(num1, num2, num3); 
	
	if ( isNaN(num1) || isNaN(num2) || isNaN(num3)){
		alert("Enter numeric Values!...");
		return;
	}

	document.getElementById("smallest").innerHTML = "Smallest Number is : " + smallest;

	document.getElementById("largest").innerHTML = "Largest Number is : " + largest;
}