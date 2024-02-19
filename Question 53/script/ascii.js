function printASCII() {
	var inputString = document.getElementById("inputString").value.trim();

	if(inputString==""){

		alert("Enter a value!");
		return;
	}

	if (/\d/.test(inputString)) {
        alert("Please enter strings containing only letters!");
        return;
    }
	
	var asciiValues = [];

            for (var i = 0; i < inputString.length; i++) {
                var asciiValue = inputString.charCodeAt(i);
                asciiValues.push(asciiValue);
            }

            var result = "ASCII Values of String Characters: " + asciiValues + "  ";
            document.getElementById("result").innerHTML = result;
        }