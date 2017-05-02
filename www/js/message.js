/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    var socket = io.connect('http://'+'129.88.242.120'+':'+'3000');
    socket.on('connect', function() {
        console.log("socket connecté");
        socket.on('text', function(text) {
            console.log("message reçu : " + text);
            alert(text);
        });
    });
    
    var messages = {liste :[{message : "sssssssssssssss", envoye : true}, 
                {message : "llllll", envoye : false}]};
      
    var template = $('#liste-message-template').html();
    $('#liste-message').html(Mustache.render(template,messages));

    $("#changerPageContact").on('click', function(){
        window.location='contact.html';
    });
    
    $('#sendbtn').on('click',function(){
        var message = document.formenvoie.zonetext.value;
        var lat = navigator.geolocation.getCurrentPosition(onLatitude, onError, {timeout:10000, enableHighAccuracy : true});
        var lon = navigator.geolocation.getCurrentPosition(onLongitude, onError, {timeout:10000, enableHighAccuracy : true});
        console.log(lat);
        console.log(lon);
        console.log(document.formenvoie.zonetext.value);
        messages.liste.push({message : document.formenvoie.zonetext.value, envoye: true});
        //envoi du message au serveur
        socket.emit("message", message);
        //envoi de la latitude et longitude au serveur
        socket.emit("lat", lat);
        socket.emit("lon", lon);
    });
    
});