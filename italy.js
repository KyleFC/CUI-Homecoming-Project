document.getElementById("imap").addEventListener("click", function() {
    if ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPad") != -1) || 
       (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps/place/Italy");
    else
    window.open("https://www.google.com/maps/place/Italy");
});
document.getElementById("inext").addEventListener("click", function() {
    window.location = "Poland.html";
})
document.getElementById("iback").addEventListener("click", function() {
    window.location = "Austria.html";
})
document.getElementById("itrivia").addEventListener("click", function() {
    window.open("https://kylefc.github.io/images/italycolor.jpg");
})