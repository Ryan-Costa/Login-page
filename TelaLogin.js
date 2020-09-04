document.getElementById("email").onchange = function(e) {
    var str = document.getElementById("email").value;
    document.getElementById("text").innerHTML = str.substr(0, 1);
}