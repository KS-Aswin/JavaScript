 function dayWeek() {

	var date = parseFloat(document.getElementById("date").value);

	var currentDate = new Date();

	var dayNumber = currentDate.getDay();

	var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	document.getElementById("result").innerHTML ="The current day of the week : "+dayOfWeek[dayNumber];
}	