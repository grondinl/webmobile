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
    var contacts = { liste :[{value : 'Paul'}, {value : 'Jack'}]};
    var template = $('#liste-contact-template').html();
    $('#liste-contact').html(Mustache.render(template,contacts));
    
    $("#changerPageMessage").on('click', function(){
        window.location='message.html';
    });
    
    
})


