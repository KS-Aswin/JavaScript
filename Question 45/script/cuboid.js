function calculateCuboid() {
    var width = document.getElementById("width").value.trim();
    var height = document.getElementById("height").value.trim();
    var length = document.getElementById("length").value.trim();
    var bredth = document.getElementById("bredth").value.trim();

    if (width == "" || height == "" || length == "" || bredth == "") {
        alert("Please enter a value!");
        return;
    }

    if (isNaN(width) || width < 0 || isNaN(height) || height < 0 || isNaN(length) || length < 0 || isNaN(bredth) || bredth < 0) {
        alert("Please enter a numeric value greater than 0!");
        return;
    }

    var w = parseFloat(width);
    var h = parseFloat(height);
    var l = parseFloat(length);
    var b = parseFloat(bredth);

    var sA = (2 * l * w) + (2 * l * h) + (2 * w * h);
    var v =(l * b * h);
    var lS = 2 * h * (l * w);

    document.getElementById("surface").innerHTML = "Surface Area of cone : " + sA.toFixed(2);
    document.getElementById("volume").innerHTML = "Volume of cone : " + v.toFixed(2);
    document.getElementById("lateral").innerHTML = "Lateral Surface Area of cone : " + lS.toFixed(2);
}
