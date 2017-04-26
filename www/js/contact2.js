/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var contacts = { liste :[{value : 'Paul'}, {value : 'Jack'}]};
    var template = $('#liste-contact-template').html();
    $('#liste-contact').html(Mustache.render(template,contacts));
})


