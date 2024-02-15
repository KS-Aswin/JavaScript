function showInputs() {
    	var option = document.getElementById("selectOption").value.trim();

    	if (option == "") {
        	alert("Enter values!");
        	return;
    	}

    	if (isNaN(option)) {
        	alert("Enter numeric values!");
        	return;
    	}
	
    	if (option < 1 || option > 5) {
        	alert("Enter values between 1 and 5!");
        	return;
    	}
	
    
    	document.getElementById("inputFields").style.display = "block";
}

function calculate() {
    	var option = document.getElementById("selectOption").value.trim();
    	var num1 = document.getElementById("num1").value.trim();
    	var num2 = document.getElementById("num2").value.trim();

    	if (num1 == "" || num2 == "") {
        	alert("Enter values!");
        	return;
    	}

    	if (isNaN(num1) || isNaN(num2)) {
        	alert("Enter numeric values values!");
        	return;
    	}

    	var o = parseFloat(option);
    	var n1 = parseFloat(num1);
    	var n2 = parseFloat(num2);

    	var result;

    	switch (o) {
        	case 1:
            		result = n1 + n2;
            		break;
        	case 2:
            		result = n1 - n2;
            		break;
        	case 3:
            		result = n1 * n2;
            	break;
        	case 4:
            		if (n2 !== 0) {
                		result = (n1 / n2).toFixed(2);
            			} else {
                		result = "Cannot divide by zero!";
            		}
            		break;
		case 5:
			if(o==5){
				document.getElementById("inputFields").style.display = "none";
				return;
			}       
    }

    document.getElementById("result").innerText = "Result: " + result;
    document.getElementById("inputFields").style.display = "none";
    setTimeout(function() {
        document.getElementById("result").innerText = "";
    }, 3000);
}
