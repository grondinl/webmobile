/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    function onDeviceReady () {       
          
        var socket = io.connect('http://'+'129.88.242.120'+':'+'3000');
        socket.on('connect', function() {
            console.log("socket connecté");
            socket.on('text', function(text) {
                console.log("message reçu : " + text);
                alert(text);
            });
        });
        
        getContactNumber();
    
        $("#changerPageMessage").on('click', function(){
            window.location='message.html';
        });
    }
       
    document.addEventListener('deviceready', onDeviceReady, false);

})


