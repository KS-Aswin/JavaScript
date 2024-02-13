function addButton(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var num3 = parseInt(document.getElementById("num3").value);
	var sum = num1 + num2 + num3;
	var avg = sum/3;
	document.getElementById("sum").innerHTML="Sum is : " + sum;
	document.getElementById("avg").innerHTML="Avarage is : " + avg;
}