function calculateCube() {
    var length = document.getElementById("length").value.trim();

    if (length == "") {
        alert("Please enter a value!");
        return;
    }

    if (isNaN(length) || length < 0) {
        alert("Please enter a value greater than 0!");
        return;
    }

    var l = parseFloat(length);

    var sA = 6*l*l;
    var v = l*l*l;
    var lS = 4*l*l;

    document.getElementById("surface").innerHTML = "Surface Area of cube : " + sA.toFixed(2);
    document.getElementById("volume").innerHTML = "Volume of cube : " + v.toFixed(2);
    document.getElementById("lateral").innerHTML = "Lateral Surface Area of cube : " + lS.toFixed(2);
}
