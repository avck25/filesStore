var theButton = document.getElementById("theButton"),
    theDiv = document.getElementById("theDiv"),
    theCount = 0;

    function handleClick() {
        theDiv.innerHTML = "I was clicked " + (++theCount) + " times";
    }

    theButton.addEventListener('click', handleClick);