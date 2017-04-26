/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*function getLocation(){
    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
     // Wait for device API libraries to load
    //
    
    console.log("rentre dans getLocalisation");
    
    // onSuccess Geolocation
    function geolocationSuccess(position) {
        console.log("I am here - SUCCESS");
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
        console.log(position.coords.latitude);
    };
    
    // onError Callback receives a PositionError object
    function geolocationError(error) {
        console.log("I am here - ERROR");
        console.log('Error w/ watchPosition: ' +JSON.stringify(error));
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
    console.log('jai recup la pos');
}
*/

/*function getLocation(){
    $('#location').click(function()
    {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    })


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


    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
    }
}*/
