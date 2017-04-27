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
        console.log(document.formenvoie.zonetext.value);
        messages.liste.push({message : document.formenvoie.zonetext.value, envoye: true});
        //socket.emit("position",pos) à compléter quand la geo marche
        socket.emit("message", message);
    });
    
});

