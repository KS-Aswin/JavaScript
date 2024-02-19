function multiTable() {
    	var num = document.getElementById("num").value.trim();

    	if (num == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (isNaN(num)) {
        	alert("Enter numeric values!");
        	return;
    	}

	var n = parseFloat(num);

    	var table = "";

    	for (var i = 1; i <= 10; i++) {
        	var result = n * i;
        	table += n + " * " + i + " = " + result + "<br>";
    	}
	document.getElementById("result").innerHTML = table;
}