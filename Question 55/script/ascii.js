function printASCII() {
    	var byte = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
	var str = String.fromCharCode.apply(null, byte);
	document.getElementById("result").innerHTML=str;
}
