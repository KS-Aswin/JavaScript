function printASCII() {
    var bytesInput = document.getElementById("bytes").value.trim();


    if (bytesInput === "") {
        alert("Please enter a value!");
        return;
    }
		if (!/^\d+$/.test(bytesInput)) {
    alert("Please enter numeric values only!");
    return;
}

	
    var bytesArray = bytesInput.split(/[,\s]+/);

    var bytes = [];

    for (var i = 0; i < bytesArray.length; i++) {
        var byte = parseInt(bytesArray[i]);

        if (isNaN(byte)) {
            alert("Please enter numeric values!");
            return;
        }
        bytes.push(byte);
    }


    var str = String.fromCharCode.apply(null, bytes);


    document.getElementById("result").innerHTML = str;
}
