/*xjshint xplusplus: true*/
//"use strict";

//var y;
var zGlobalVariable = "Im a global";
//var 
zAnotherGlobal = "so am I";

function foo() {
    "use strict";
    var zImNotAGlobal = "Im not a global";
    zYetAnotherGlobal = "But I am";
    var anotherLocalVariable = 5;
}

foo();
console.log("done");

//////////////////////////////////

var aVariable = 5;
aVariable = "Hello";

console.log('1 == "1"', 1 == "1");
console.log('1 === "1"', 1 === "1");

console.log('"5" + 1', "5" + 1);
console.log('1 + "5"', 1 + "5");
console.log('"5" - 1', "5" - 1);
console.log('Number("5") + 1', Number("5") + 1);

var answer1 = "hello" / "Goodbye";
console.log('"hello" / "Goodbye"', answer1);

var answer2 = "hello" / "Goodbye";
console.log('answer1', answer1, 'answer2', answer2, 'answer1 == answer2', answer1 == answer2);

if(isNaN(answer1)) {
    console.log('answer1 is nan');
}

//////////

console.log('y', y);
var y = 5;

console.log('x', x);
y++;

/* jshint ignore:start */
y++;
/* jshint ignore:end */

y++;  // jshint ignore:line


