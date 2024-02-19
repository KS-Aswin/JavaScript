function addButton(){
	var num1 = parseInt(document.getElementById("num1").value.trim());
	var num2 = parseInt(document.getElementById("num2").value.trim());
	var num3 = parseInt(document.getElementById("num3").value.trim());
	var sum = num1 + num2 + num3;
	var avg = sum/3;
	document.getElementById("sum").innerHTML="Sum is : " + sum;
	document.getElementById("avg").innerHTML="Avarage is : " + avg;
}