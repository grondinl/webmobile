/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){  
    function onDeviceReady () {             
        getContactList()
        $("#changerPageMessage").on('click', function(){
            window.location='message.html';
        });
        
        $("#actualisation").on('click', function() {
            updateContact();
        });
    }
       
    document.addEventListener('deviceready', onDeviceReady, false);

});


