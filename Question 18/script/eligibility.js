 function eligibility() {

	var maths = document.getElementById("mark1").value.trim();

	var phy = document.getElementById("mark2").value.trim();

	var che = document.getElementById("mark3").value.trim();
	
	if (maths == "" || phy == "" || che =="" ) {
        	alert("Please enter values in all fields!...");
        	return;
    	}

	if ( isNaN(maths) || isNaN(phy) || isNaN(che) ){
		alert("Enter numeric Values!...");
		return;
	}

	var m=parseFloat(maths);
	var p=parseFloat(phy);
	var c=parseFloat(che);
	
	var total = m + p + c;
	var totMathPhy = m + p;

	if ( (m >= 60 && p >= 55 && c >= 50) && (total >= 190 || totMathPhy >= 140 ) ){
		document.getElementById("result").innerHTML = "The candidate is eligible!...";
	} else{
	
		document.getElementById("result").innerHTML = "The candidate is not eligible!...";
	}	
}	