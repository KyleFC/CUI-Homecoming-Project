document.getElementById("gmap").addEventListener("click", function() {
    if ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPad") != -1) || 
       (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps/place/Germany");
    else
    window.open("https://www.google.com/maps/place/Germany");
});
document.getElementById("gnext").addEventListener("click", function() {
    window.location = "Austria.html";
})