(function () {
    "use strict";
    var ok = false;

    function get(id) {
        return document.getElementById(id);

    }

    function removeRequired(elem) {
        elem.forEach(function (element) {
            var input = get(element);
            input.removeAttribute('required');
        });

    }

    function setRequired(elem) {
        elem.forEach(function (element) {
            var input = get(element);
            input.setAttribute('required', 'required');
        });

    }

    function clear(elem) {

        elem.forEach(function (element) {
            var input = get(element);
            input.value = "";
        });

    }



    var theTable = get('contacts'),
        contacts = [],
        dialog = get('dialog');


    function addContact() {

        var contact = {
            firstName: get('firstName').value,
            lastName: get('lastName').value,
            email: get('email').value,
            phone: get('phone').value
        };

        contacts.push(contact);

        if (contacts.length === 1) {
            theTable.deleteRow(1);
        }


        var row = theTable.insertRow(),
            firstNameCell = row.insertCell(),
            lastNameCell = row.insertCell(),
            emailCell = row.insertCell(),
            phoneCell = row.insertCell();

        firstNameCell.innerHTML = contact.firstName;
        lastNameCell.innerHTML = contact.lastName;
        emailCell.innerHTML = contact.email;
        phoneCell.innerHTML = contact.phone;

    }

    get('addContact').addEventListener('click', function () {
        //addContact();
        dialog.style.display = "inline-block";
    });



    get('ok').addEventListener('click', function () {
        ok = true;
        setRequired(['firstName', 'lastName', 'email', 'phone']);

    });


    get('cancel').addEventListener('click', function () {
        ok = false;
        removeRequired(['firstName', 'lastName', 'email', 'phone']);
        dialog.style.display = "none";
        console.log(event);
        clear(['firstName', 'lastName', 'email', 'phone']);
    });

    dialog.addEventListener('submit', function (event) {
        if (ok) {
            addContact();
            dialog.style.display = "none";
            clear(['firstName', 'lastName', 'email', 'phone']);
            ok = false;
        }
        event.preventDefault();
    });

} ());