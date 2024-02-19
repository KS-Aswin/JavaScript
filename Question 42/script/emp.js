function calculateSalary() {
	var basicSalary = document.getElementById("basic").value.trim();

	if (basicSalary=="") {
                alert("Please enter a value!");
                return;
	}

	if (isNaN(basicSalary) || basicSalary <= 0) {
                alert("Please enter a valid basic salary!");
                return;
	}

	var bS=parseFloat(basicSalary);

            var hra, da;
            if (bS <= 10000) {
                hra = bS * 0.08;
                da = bS * 0.10;
            } else if (bS <= 20000) {
                hra = bS * 0.16;
                da = bS * 0.20;
            } else {
                hra = bS * 0.24;
                da = bS * 0.30;
            }

            var grossSalary = bS + hra + da;
            document.getElementById("result").innerHTML = "Gross Salary: Rs. " + grossSalary.toFixed(2);
        }