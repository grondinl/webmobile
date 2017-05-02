/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 
 * @type contacts
 * Array[
 *      array phoneNumbers
 *      string displayName
 */
var contactList;




function getContactList() {
    getContactNumber();
    var listeContacts = { liste :[]};
    for (i = 0; i < contactList.length; i++) {
        listeContacts.liste.push({value : contactList[i].displayName, number : contactList[i].phoneNumbers[0]});
    }
    var template = $('#liste-contact-template').html();
    $('#liste-contact').html(Mustache.render(template,listeContacts));
}


function getContactListApp() {
    getContactNumber();
}
function updateContact() {
    getContactNumber();
    console.log(connection);
    var socket = io.connect('http://'+'129.88.242.120'+':'+'3000');
    socket.on('connect', function() {
            console.log("socket connecté");
            socket.emit('identification', window.localStorage.getItem("tel"));
            socket.on('text', function(text) {
               console.log(text); 
            });
            socket.on('identification ok', function() {
                //alert("connecté !");
                socket.emit('update contacts', contactList);
            });
            
    });
}

function getContactNumber() {
        function onSuccessPhoneNumber(contacts) {
            console.log('Found ' + contacts.length + ' contacts.');
            contactList = contacts;
            for (i = 0; i < contacts.length; i++) {
                var numbers = contacts[i].phoneNumbers;
                for (j = 0; j < numbers.length; j++) {
                    console.log("nom: " + contacts[i].displayName);
                    console.log('number: ' + numbers[j].value);
                }
            }
        };
        
        function onErrorPhoneNumber(contactError) {
            console.log('onError!PhoneNumber');
        };
        
        var options      = new ContactFindOptions();
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.phoneNumbers, navigator.contacts.fieldType.displayName ];
        options.hasPhoneNumber = true;
        var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, onSuccessPhoneNumber, onErrorPhoneNumber, options);
}