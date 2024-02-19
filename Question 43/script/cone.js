function calculateCone() {
    var area = document.getElementById("area").value.trim();
    var height = document.getElementById("height").value.trim();
    var length = document.getElementById("length").value.trim();
    var radius = document.getElementById("radius").value.trim();

    if (area == "" || height == "" || length == "" || radius == "") {
        alert("Please enter a value!");
        return;
    }

    if (isNaN(area) || area < 0 || isNaN(height) || height < 0 || isNaN(length) || length < 0 || isNaN(radius) || radius < 0) {
        alert("Please enter a numeric value greater than 0!");
        return;
    }

    var a = parseFloat(area);
    var h = parseFloat(height);
    var l = parseFloat(length);
    var r = parseFloat(radius);
    var pi = 3.14;

    var sA = (pi * r * l) + (pi * r * r);
    var v = (1 / 3) * (pi * r * r * h);
    var lS = pi * r * l;

    document.getElementById("surface").innerHTML = "Surface Area of cone : " + sA.toFixed(2);
    document.getElementById("volume").innerHTML = "Volume of cone : " + v.toFixed(2);
    document.getElementById("lateral").innerHTML = "Lateral Surface Area of cone : " + lS.toFixed(2);
}
