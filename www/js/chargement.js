/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    function onDeviceReady() {
        var tel = window.localStorage.getItem("tel");
        console.log("connection");
        var socket = io.connect('http://'+'129.88.241.22'+':'+'3000');
        socket.on('connect', function() {
                console.log("socket connecté");
                socket.emit('identification', tel);
                socket.on('text', function(text) {
                   console.log(text); 
                });
                socket.on('identification ok', function() {
                    $('#loading').hide();
                    //alert("connecté !");
                    window.location = 'message.html';
                });
        });
        setTimeout(function() {if(socket.connected == false) {alert("probleme de connection")};}, 5000);
    }
    document.addEventListener('deviceready', onDeviceReady, false);
});