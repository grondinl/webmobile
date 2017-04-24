/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var device = require('cordova-plugin-device');
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //document.addEventListener('numberSent' , numberSent(), false)
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() { //pour utiliser les plugins
        this.receivedEvent('deviceready');

        
        //authentification aux serveurs
        //  -récupère le numéro de téléphone
        //  -vérifie que ce numéro est un utilisateur
        //  -si non l'ajoute
        $("#sendTel").on('click', function() {
            var tel = document.saisieTel.telephone.value;
            console.log(tel);
        });

        getDeviceUUID();
        getContactNumber();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        
        console.log('Received Event: ' + id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function numberSent(){
    window.location=message.html;
    
}

function getDeviceUUID() {
        var id = device.uuid;
        console.log('device id' + id);
}

function getContactNumber() {
        function onSuccessPhoneNumber(contacts) {
            console.log('Found ' + contacts.length + ' contacts.');
            var mesContacts = contacts;
            for (i = 0; i < contacts.length; i++) {
                var numbers = contacts[i].phoneNumbers;
                for (j = 0; j < numbers.length; j++) {
                    console.log('number: ' + numbers[j].value);
                }
            }
            console.log(mesContacts);
        };
        function onErrorPhoneNumber(contactError) {
            console.log('onError!PhoneNumber');
        };
        
        var options      = new ContactFindOptions();
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.phoneNumbers];
        options.hasPhoneNumber = true;
        var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, onSuccessPhoneNumber, onErrorPhoneNumber, options);
}

 
app.initialize();
