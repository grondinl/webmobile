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
var messages = {liste :[{message : "sssssssssssssss", envoye : true}, 
                {message : "llllll", envoye : false}]};
var contacts = { liste :[{value : 'Paul'}, {value : 'Jack'}]};
var connected = 0;
var template;
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() { //pour utiliser les plugins
        this.receivedEvent('deviceready');
        $("#sendTel").on('click', function() {
            var tel = document.saisieTel.telephone.value;
            console.log(tel);
        });
        
        $("#changerPageMessage").on('click', function(){
            window.location='message.html';
            template = $('#liste-message-template').html();
            $('#liste-message').html(Mustache.render(template,messages));
        });
        
        $("#changerPageContact").on('click', function(){
            window.location='contact.html';
            template = $('#liste-contact-template').html();
            $('#liste-contact').html(Mustache.render(template,contacts));
        });
                
        $('#start').on('click', function() {
            if (connected == 0) {
                var socket = io.connect('http://'+'129.88.242.119'+':'+'3000');
                socket.on('connect', function() {
                    console.log("socket connecté");
                    socket.on('text', function(text) {
                        console.log("message reçu : " + text);
                        alert(text);
                    });
                });
                connected=1;
            } else {
                console.log("already connected !");
            }
            window.location='message.html';

        });
        
        
        $('#sendbtn').on('click',function(){
           console.log(document.formenvoie.zonetext.value);
           messages.liste.push({message : document.formenvoie.zonetext.value, envoye: true});
            
        });
        
        
        getDeviceUUID();
        getContactNumber();
        
        //Location
        $('#request-location').on("click", function(){
            cordova.plugins.diagnostic.requestLocationAuthorization(function(status){
                console.log("Successfully requested location authorization: authorization was " + status);
            }, 
            function(error){console.error(error);});
        });

        $('#location-settings').on("click", function(){
            cordova.plugins.diagnostic.switchToLocationSettings();
        });
        getLocation();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();