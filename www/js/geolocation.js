/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function voirUtilisateur(position){ 
  if (position != null) { 
    var googlePosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);   
    var options = { 
      zoom: 10, 
      center: googlePosition, 
      mapTypeId: google.maps.MapTypeId.ROADMAP 
    } 
 
    var map = new google.maps.Map(document.getElementById("map"), options); 
    var marker = new google.maps.Marker({ 
      position: googlePosition, 
      map: map, 
      title:"Ma position" 
    }); 
  } 
}

var onSuccess = function(position) {
   alert('Latitude: ' + position.coords.latitude + '\n' +
     'Longitude: ' + position.coords.longitude + '\n' +
     'Altitude: ' + position.coords.altitude + '\n' +
     'Accuracy: ' + position.coords.accuracy + '\n' +
     'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
     'Heading: ' + position.coords.heading + '\n' +
     'Speed: ' + position.coords.speed + '\n' +
     'Timestamp: ' + position.timestamp + '\n');                 
};

var onLatitude = function(position) { 
    return position.coords.latitude;                    
};

var onLongitude = function(position) { 
    return position.coords.longitude;                    
};


// onError Callback receives a PositionError object
//
function onError(error) {
   alert('code: ' + error.code + '\n' +
     'message: ' + error.message + '\n');
}