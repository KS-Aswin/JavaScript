 function eligibility() {

	var maths = parseFloat(document.getElementById("mark1").value);

	var phy = parseFloat(document.getElementById("mark2").value);

	var che = parseFloat(document.getElementById("mark3").value);

	if ( isNaN(maths) || isNaN(phy) || isNaN(che) ){
		alert("Enter numeric Values!...");
		return;
	}
	
	var total = maths + phy + che;
	var totMathPhy = maths + phy;

	if ( (maths >= 60 && phy >= 55 && che >= 50) && (total >= 190 || totMathPhy >= 140 ) ){
		document.getElementById("result").innerHTML = "The candidate is eligible!...";
	} else{
	
		document.getElementById("result").innerHTML = "The candidate is not eligible!...";
	}	
}	