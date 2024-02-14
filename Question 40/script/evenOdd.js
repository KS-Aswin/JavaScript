 function printEven() {
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
	var resultEven='';
	var resultOdd='';
    	var sumEven = 0;
    	var sumOdd = 0;

	for( var i=1;i<=n;i++){
		if( i % 2 == 0 ){
			resultEven += i +"  ";
        		sumEven += i;
		}else{
			resultOdd += i +"  ";
        		sumOdd += i;
		}	
	}
	document.getElementById("even").innerHTML ="Sum of Even Numbers upto " + n + " is : " + sumEven;
	document.getElementById("odd").innerHTML ="Sum of Odd Numbers upto " + n + " is : " + sumOdd;

}