/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    function onDeviceReady () {
        var messages = {liste :[]};
        var socket = io.connect('http://'+'129.88.242.119'+':'+'3000');
        socket.on('connect', function() {
            console.log("socket connecté");
            socket.on('text', function(text) {
                console.log("message reçu : " + text);
                //alert(text);
            });
            socket.emit("identification", window.sessionStorage.getItem("tel"));
            socket.on("identification ok", function() {
                socket.emit("recuperation message", window.sessionStorage.getItem("tel"));
                socket.on("envoie message", function(messageRecu){
                    for (i = 0; i < messageRecu.length; i++){  
                        messages.liste.push({message : messageRecu[i].message}); 
                    }
                });
                $('#sendbtn').on('click',function(e){
                    var mess = document.formenvoie.zonetext.value;
                    navigator.geolocation.getCurrentPosition(function(position) {
                        var messageEtOption={};
                        messageEtOption.message = mess;
                        messageEtOption.lat = position.coords.latitude; 
                        console.log(messageEtOption.lat);
                        messageEtOption.lon = position.coords.longitude;
                        console.log(messageEtOption.lon);
                        if (typeof messageEtOption.lat == 'undefined' || typeof messageEtOption.lon == 'undefined') {
                            alert("erreur position ! Message non envoyé !");
                        } else {
                            socket.emit("newMessage", messageEtOption);
                        }
                    }, onError, {timeout:10000, enableHighAccuracy : true});
                    console.log(document.formenvoie.zonetext.value);
                    //socket.emit("position",pos) à compléter quand la geo marche
                    //socket.emit("identification", window.sessionStorage.getItem("tel"));


                    e.preventDefault();
                });
            });



        });
        var template = $('#liste-message-template').html();
        $('#liste-message').html(Mustache.render(template,messages));



        $("#changerPageContact").on('click', function(){
            window.location='contact.html';
        });
    }
    document.addEventListener('deviceready', onDeviceReady, false);

});