function addButton(){
	var num1 = parseInt(document.getElementById("num1").value.trim());
	var num2 = parseInt(document.getElementById("num2").value.trim());
	var sum = num1 + num2;
	document.getElementById("result").innerHTML="Result is : " + sum;
}