/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var messages = {liste :[{message : "sssssssssssssss", envoye : true}, 
                {message : "llllll", envoye : false}]};
    var template = $('#liste-message-template').html();
    $('#liste-message').html(Mustache.render(template,messages));
});


