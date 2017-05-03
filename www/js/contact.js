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
    getContactNumber(function() {
        var listeContacts = { liste :[]};
        console.log(contactList);
        for (i = 0; i < contactList.length; i++) {
            listeContacts.liste.push({value : contactList[i].displayName, number : contactList[i].phoneNumbers[0].value});
        }
        var template = $('#liste-contact-template').html();
        $('#liste-contact').html(Mustache.render(template,listeContacts));
    });

}


function getContactListApp() {
    getContactNumber();
}
function updateContact() {
    getContactNumber(function() {
        console.log("connection");
        var socket = io.connect('http://'+'129.88.242.122'+':'+'3000');
        socket.on('connect', function() {
                console.log("socket connecté");
                socket.emit('identification', window.localStorage.getItem("tel"));
                socket.on('text', function(text) {
                   console.log(text); 
                });
                socket.on('identification ok', function() {
                    //alert("connecté !");
                    console.log("taille contact : "+ contactList.length);
                    for (i = 0; i<contactList.length; i++){
                        console.log("update contact " + contactList[i].phoneNumbers[0].value);
                        socket.emit('update contact', contactList[i].phoneNumbers[0].value);
                    }
                    socket.emit('liste contacts');
                    socket.on('envoie liste contacts', function(contactListApp) {
                        console.log("Recuperation de la liste des contact de l'application");
                        var listeContacts = { liste :[]};
                        console.log(contactListApp);
                        console.log(contactList);
                        for(i = 0 ; i < contactListApp.length; i++){
                            for(j = 0; j < contactList.length; j ++) {
                                if(contactListApp[i].numerotel === contactList[j].phoneNumbers[0].value) {
                                    listeContacts.liste.push({value : contactList[j].displayName, 
                                                            number : contactList[j].phoneNumbers[0].value});
                                }
                            }
                        }
                        console.log(listeContacts);
                        var template = $('#liste-contact-template').html();
                        $('#liste-contact').html(Mustache.render(template,listeContacts));     
                    });
                });
        });
        setTimeout(function() {if(socket.connected == false) {alert("probleme de connection")};}, 5000);
    });
}

function getContactNumber(callback) {
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
            callback();
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