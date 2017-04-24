/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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
            console.log('Contacts : ' + mesContacts);
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