// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Im80lAe0eWHPFipE22dURPr4cx-m1dmINc7D0WVHyzo/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
    var timestampArray = [];
    var nameArray = [];
    var projectArray = [];
    var locationArray = [];
    var contactArray = [];
    var otherArray = [];
//    
    var index = 0;
    let count = data.length;
    while (index < count){
        timestampArray.push(data[index]["timestamp"]);
        nameArray.push(data[index]["name"]);
        projectArray.push(data[index]["project"]);
        locationArray.push(data[index]["location"]);
        contactArray.push(data[index]["contact"]);
        otherArray.push(data[index]["other"]);
        index++;
    }
//    populateName(nameArray);
//    populateProject(projectArray);
    markLocation(locationArray);
//    populateContact(contactArray);
//    populateOther(otherArray);
    
	
}

function markLocation(locationArray){
    for(var index = 0; index < locationArray.length; index++){
        var lat = '';
        var lng = '';
        var zip = locationArray[index];
        geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
            markerPosition = {lat: lat, lng: lng}
        }
        }
    }
document.getElementById("locationmarker").innerHTML = locationmarker;
}