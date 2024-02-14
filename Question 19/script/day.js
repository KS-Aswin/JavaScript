function dayWeek() {
    var day = document.getElementById("day").value.trim();
    
    if (day == "") {
        alert("Please enter a value!");
        return;
    }

    if (isNaN(day) || day < 1 || day > 7) {
        alert("Enter valid numbers between 1 and 7!");
        return;
    }
    
    var dayIndex = Math.floor(parseInt(day));

    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = dayOfWeek[dayIndex - 1];

    document.getElementById("result").innerHTML = "The day of the week is: " + d;
}
