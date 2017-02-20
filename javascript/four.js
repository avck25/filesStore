greet();
function greet() {
    console.log("Hello!");
}
greet();

function getGreeter() {
    return function /*greet*/() {
        console.log("Hello!");
    };
    //return greet;
}

var theGreeter = getGreeter();
theGreeter();
getGreeter()();

//////////////////////////////////////////////////////

function foo() { console.log('foo'); }
//bar();
var bar = function nameHereIsOptional() { console.log('bar'); };
var bar2 = function() { console.log('bar2'); };

foo();
bar();
//nameHereIsOptional();
bar2();

//////////////////////////
function greet2() {
    console.log("Hello " + name);
}

function getBetterGreeter(name) {
    return function () {
        console.log("Hello " + name);
    }
    //return greet2;
}
var greetBarack = getBetterGreeter("Barack");
greetBarack();