/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    var tel = window.sessionStorage.getItem("tel");
    console.log("connection");
    var socket = io.connect('http://'+'129.88.241.129'+':'+'3000');
    socket.on('connect', function() {
            console.log("socket connecté");
            socket.emit('identification', tel);
            socket.on('text', function(text) {
               console.log(text); 
            });
            socket.on('identification ok', function(text) {
                $('#loading').hide();
                alert("connecté !");
                window.location = 'message.html';
            });
    });
});