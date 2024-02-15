function printFibonacci() {
    	var num = document.getElementById("num").value.trim();

    	if (num == "") {
        	alert("Please enter a value!");
        	return;
    	}

    	if (isNaN(num) || num <= 0) {
        	alert("Please enter a valid number!");
        	return;
    	}

    	var n = parseInt(num);
    	var series = [];

    	for (var i = 0; i <= n; i++) {
        	series.push(fibonacci(i));
    	}

    	document.getElementById("fibo").innerHTML = "Fibonacci Series Up to " + n + ": " + series.join(", ");
	}

	function fibonacci(n) {
    		if (n <= 1) {
        	return n;
    	}
    	return fibonacci(n - 1) + fibonacci(n - 2);
}
