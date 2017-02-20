(function () {
    'use strict';

    $.getJSON('thinkgeek.php', function (data) {
        console.log(data.upc);
        $('<p class="upc">' + data.upc + '</p>').appendTo('#results');

    });
} ());