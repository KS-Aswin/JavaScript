 function printOdd() {
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
	var result='';

	for( var i=1;i<=n;i++){
		if( i % 2 != 0 ){
			result += i +"  ";
		}	
	}
	document.getElementById("result").innerHTML ="Odd Numbers upto " + n + " is : " + result;

}