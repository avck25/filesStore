(function () {
    'use strict';
    /*global $*/



    $.getJSON('allItems.json', function (data) {

        data.forEach(function (element) {

            $('<p class="name">' + element['UNIT UPC'] + '</p><p class="price">' + element['SELL PRICE PER UNIT'] + '</p>')
                .appendTo('#allItems');
        });
    });

} ());



