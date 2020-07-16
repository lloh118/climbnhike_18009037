


function onMapInit(map) {
    // You can use another methods from here.
}

//On document load change default page transition to 'flow' to save coding each, just code for reverse transitions
$(document).bind("mobileinit", function() {
    $.mobile.defaultPageTransition = "flow"   // flip is the default transition effect
});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.geolocation);
}



var mymap = L.map('map_canvas').setView([51.505, -0.09], 13);


//leaflet map js
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiMTgwMDkwMzciLCJhIjoiY2tjbnd2MW54MGZnNzJzcGIyYWt4eTI4bSJ9.7bmgBrSFIPDj3xeSYOkkEQ'
}).addTo(mymap);


function emerCall() {
    alert("Emergency call sent to server")

}
$( document ).ready(function() {

});



var loc = document.getElementById("location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log("show position() called");
    alert(" Your latitude is " + position.coords.latitude);
    loc.innerHTML = "<p>Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude + "</p>";
}