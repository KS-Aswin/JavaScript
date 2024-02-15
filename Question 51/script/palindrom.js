function checkPal() {
    	var num = document.getElementById("num").value.trim();
    
    	if (num == "") {
        	alert("Please enter a value!");
        	return;
    	}
    
    	if (isNaN(num)) {
        	alert("Please enter a Number!");
        	return;
    	}
	
	n=parseFloat(num);

    	var revNum = n.toString().split('').reverse().join('');

    	if (n == revNum) {
        	document.getElementById("result").innerHTML = "The given number is a palindrome!";
    	} else {
        	document.getElementById("result").innerHTML = "The given number is not a palindrome!";
    	}
}
