function printNum() {
    	printNumbers(1);
}

function printNumbers(n) {
    	if (n <= 100) {
        	var output = document.getElementById("result").innerHTML += n + "<br>";
        	printNumbers(n + 1);
    	}
}
