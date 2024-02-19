 function largestSmallest() {

	var num1 = document.getElementById("num1").value.trim();

	var num2 = document.getElementById("num2").value.trim();

	var num3 = document.getElementById("num3").value.trim();
	
	if (num1 == "" || num2 == "" || num3=="" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}
	
	if ( isNaN(num1) || isNaN(num2) || isNaN(num3)){
		alert("Enter numeric Values!...");
		return;
	}

	var n1=parseFloat(num1);
	var n2=parseFloat(num2);
	var n3=parseFloat(num3);

	var smallest = Math.min(n1, n2, n3); 

	var largest = Math.max(n1, n2, n3); 

	document.getElementById("smallest").innerHTML = "Smallest Number is : " + smallest;

	document.getElementById("largest").innerHTML = "Largest Number is : " + largest;
}