document.getElementById("amap").addEventListener("click", function() {
    if ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPad") != -1) || 
       (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps/place/Austria");
    else
    window.open("https://www.google.com/maps/place/Austria");
});
document.getElementById("abutton").addEventListener("click", function() {
    window.location = "Italy.html";
})