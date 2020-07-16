
//DATA LOCATION PAGE
var loc = document.getElementById("location");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//show the position function
function showPosition(position) {
    console.log("show position() called");
    alert(" Your latitude is " + position.coords.latitude);
    //jQuery for Display value to html doc by updated loc variable value
    $(loc).val("<p>Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude + "</p>");

}


//Global variables

var watchID;

var locationOptions = {
    maximumAge: 10000,
    timeout: 6000,
    enableHighAccuracy: true
};

//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {

    console.log("jQuery mobile intialised");
    //set up listener for button clicks
    $('#startLocationButton').on('click', updatePosition);
    $('#stopLocationButton').on('click', stopPosition);

});



//fucntion to Update changes in the position via button in html
function updatePosition() {
    //instruct location service to get position with appropriate callbacks
    watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}

//Stop watching for updates in location
function stopPosition() {
    //instruct location service to get position with appropriate callbacks
    navigator.geolocation.clearWatch(watchID);
}


//called when the position is successfully determined
function successPosition(position) {

    //save the below long/latitute/time in varaibles below ready to export to html
    var time = position.timestamp;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    //jQuery for inputting the values into the html document
    $('#time').val("Recieved data at " + time);
    $('#lattext').val(latitude);
    $('#longtext').val(longitude);

}

//called if the position throws back error not success
function failPosition(error) {
    //change time box to show updated message
    $('#time').val("Sorry we can't get your data right now: " + error);

}

//  TRANSITIONS
//On document load change default page transition to 'flow' to save coding each, just code for reverse transitions
$(document).bind("mobileinit", function() {
    $.mobile.defaultPageTransition = "flow"   // flip is the default transition effect
});

// TIMER
//intitialize variables not equal
var timeset = 0;
var timeNow = 1;

function timesubmitted() {

    var timeset = document.getElementById("timer").value;
    //test function has worked
    console.log(timeset);
    //Set timer in local storage for checking
    localStorage.setItem("timeset", timeset);

    console.log(timeNow);
    alert("Timer has been set")


}

function cleartimer() {
    clearInterval(myTimeCheck);
    alert("Timer Cleared")
}

//Check time if timeset = timeNow ever 60seconds
var myTimeCheck = setInterval(function(){
    //first get the date object
    var today = new Date();
    //check current time (update)
    var timeNow = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes();
    //TEST
    console.log("Time now is: " + timeNow);
    //Check if time set is equal to time now
    if (localStorage.getItem("timeset") === timeNow) {
        alert("Time set, is up! code amber sent to server,");
        //Stop cycle of checking time
        clearInterval(myTimeCheck);
    }
    else {
        console.log("ITS NOT TIME YET!")
    }
     }, 3000);


//MAP PAGE SECTION


function onMapInit(map) {
    // You can use another methods from here.
}



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

//Emergency call button would be linked to server but for now just alert
function emerCall() {
    alert("Emergency call sent to server")

}
$( document ).ready(function() {

});








