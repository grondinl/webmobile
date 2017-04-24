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
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        getDeviceUUID();
        getContactNumber();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
};
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

<<<<<<< HEAD
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
=======
app.initialize();

>>>>>>> cdfd30c8307b181bb2e1bb49b6b2dbe0c1a8ba57
