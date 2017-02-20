(function () {
    var possibleNames = [],
        theList = $('#theList'),
        next = $('#next'),
        prev = $('#prev'),
        index = 0;


    function getRandomNames(bigString) {
        var i = 0;
        while (i++ < 150) {
            var tempString = "office ";
            var j = 0;
            while (j++ <= 4) {
                var spot = Math.random() * bigString.length;
                tempString += bigString.charAt(spot);
            }
            possibleNames.push(tempString);
        }

        display();
    }

    function display() {
        for (var i = index; i < index + 10; i++) {
            theList.append('<li>' + possibleNames[i] + '</li>');

        }
    }

    getRandomNames('computerstandaccessories');


    next.click(function () {
        console.log('next');
        index += 10;
        theList.empty();
        display();

    });

    prev.click(function () {
        console.log('prev');
        index -= 10;
        theList.empty();
        display();

    });


} ());