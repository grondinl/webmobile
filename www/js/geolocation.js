/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function onSuccessLocation(position){
    var positionFeatures = position;   
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                         'Longitude: '          + position.coords.longitude             + '<br />' +
                         'Altitude: '           + position.coords.altitude              + '<br />' +
                         'Accuracy: '           + position.coords.accuracy              + '<br />' +
                         'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                         'Heading: '            + position.coords.heading               + '<br />' +
                         'Speed: '              + position.coords.speed                 + '<br />' +
                         'Timestamp: '          + position.timestamp                    + '<br />';
    console.log(positionFeatures);
    }
    
function onErrorLocation(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}



