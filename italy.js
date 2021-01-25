document.getElementById("imap").addEventListener("click", function() {
    if ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPad") != -1) || 
       (navigator.platform.indexOf("iPod") != -1))
    window.open("maps://maps.google.com/maps/place/Italy");
    else
    window.open("https://www.google.com/maps/place/Italy");
});
document.getElementById("ibutton").addEventListener("click", function() {
    window.open("Poland.html");
})