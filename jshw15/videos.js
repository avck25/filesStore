(function () {
    'use strict';
    /*global $*/
    var myVideos = $('#myVideos');

    function appendData(myObject) {

        $('<div class="picDiv"><h2>' + myObject.Title + '</h2><img src="' + myObject.image + '" poster="' + '"></div>').appendTo(myVideos)
            .click(function () {
                $('#theVideo').attr('src', myObject.url)[0].play();


            });

    }



    $('#theVideo').click(function () {
        if ($(this)[0].paused === false) {
            $(this)[0].pause();
        } else {
            $(this)[0].play();
        }


    });

    $('#loadvideos').click(function () {
        $.getJSON('videos.json', function (data) {
            data.forEach(function (element) {
                appendData(element);

            });
        });
        $('#loadvideos').prop("disabled", true);
    });
} ());