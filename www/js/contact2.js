/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){  
    function onDeviceReady () {             
        getContactList();
        updateContact();
        $("#changerPageMessage").on('click', function(){
            window.location='message.html';
        });
    }
       
    document.addEventListener('deviceready', onDeviceReady, false);

});


