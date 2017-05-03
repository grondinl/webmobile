/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    function onDeviceReady () {

        var messages = {liste :[]};
        var socket = io.connect('http://'+'129.88.242.123'+':'+'3000');
        socket.on('connect', function() {
            console.log("socket connecté");
            socket.on('text', function(text) {
                console.log("message reçu : " + text);
                //alert(text);
            });
            socket.emit("identification", window.localStorage.getItem("tel"));
            socket.on("identification ok", function() {
                navigator.geolocation.getCurrentPosition(function(position){
                    var pos ={};
                    pos.lat=position.coords.latitude;
                    pos.lon=position.coords.longitude;
                    if (typeof pos.lat == 'undefined' || typeof pos.lon == 'undefined') {
                        alert("erreur position ! Message non envoyé !");
                    } else {
                        socket.emit("recuperation message", pos);
                    }
                }, onError, {timeout:3000, enableHighAccuracy : true});
                socket.on("envoie message", function(messageRecu){
                    messages = {liste :[]};
                    for (i = 0; i < messageRecu.length; i++){  
                        messages.liste.push({message : messageRecu[i].message}); 
                    }
                    var template = $('#liste-message-template').html();
                    $('#liste-message').html(Mustache.render(template,messages));
                });
                
                $('#sendbtn').on('click',function(e){
                    var mess = document.formenvoie.zonetext.value;
                    document.formenvoie.zonetext.val("");
                    navigator.geolocation.getCurrentPosition(function(position) {
                        var messageEtOption={};
                        messageEtOption.message = mess;
                        messageEtOption.lat = position.coords.latitude; 
                        //console.log(messageEtOption.lat);
                        messageEtOption.lon = position.coords.longitude;
                        //console.log(messageEtOption.lon);
                        if (typeof messageEtOption.lat == 'undefined' || typeof messageEtOption.lon == 'undefined') {
                            alert("erreur position ! Message non envoyé !");
                        } else {
                            socket.emit("newMessage", messageEtOption);
                        }
                    }, onError, {timeout:3000, enableHighAccuracy : true});
                    console.log(document.formenvoie.zonetext.value);
<<<<<<< HEAD
=======
                    //socket.emit("position",pos) à compléter quand la geo marche
                    //socket.emit("identification", window.localStorage.getItem("tel"));


>>>>>>> d0ca54a10803b086e082def4c4bb311404267292
                    e.preventDefault();
                });
                
                $('#actualisation').on('click', function(e) {
                    //envoie de la position
                    navigator.geolocation.getCurrentPosition(function(position){
                        var pos ={};
                        pos.lat=position.coords.latitude;
                        pos.lon=position.coords.longitude;
                        if (typeof pos.lat == 'undefined' || typeof pos.lon == 'undefined') {
                            alert("erreur position ! Message non envoyé !");
                        } else {
                            socket.emit("recuperation message", pos);
                        }
                    }, onError, {timeout:3000, enableHighAccuracy : true});
                    //recuperation des messages
                    socket.on("envoie message", function(messageRecu){
                        messages = {liste :[]};
                        for (i = 0; i < messageRecu.length; i++){  
                            messages.liste.push({message : messageRecu[i].message}); 
                        }
                        var template = $('#liste-message-template').html();
                        $('#liste-message').html(Mustache.render(template,messages));
                    });                   
                    
                });
            });
        });
        
        setTimeout(function() {if(socket.connected == false) {alert("probleme de connection")};}, 5000);


        $("#changerPageContact").on('click', function(){
            window.location='contact.html';
        });
    }
    
    document.addEventListener('deviceready', onDeviceReady, false);

});