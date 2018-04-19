// FOR LOOPS, CONSOLE LOGGING, REVERSING AND PRINTING ONE CHARACTER AT A TIME ON A LINE

var str = 'Boo';
console.log("My string has a length of: " + str.length);
for (var i = str.length-1; i >= 0; i--) {
  console.log("index: " + i + " has a character of: " + str.charAt(i));

}

//BASIC FUNCTION - THAT WORKS

console.log(myFunction('I think I can, I think I can.'));

function myFunction(engine) {
 return engine + " = " + engine.length;

}


//BASIC FUNCTION WITH PARAMETERS

var me = "Hi Michelle";
var you = "Hi Mark";

console.log(weWorkTogether(you, me));

function weWorkTogether(me,you) {
  return me + " " + you;

}


// ATTEMPT AT REVERSING STRING VIA FUNCTION
var crazy = 'Going Crazy';
var newstuff = reverseIt(crazy);
console.log(newstuff);

function reverseIt(leSigh) {
  var gettingIt = '';
  for (var i = leSigh.length - 1; i >= 0; i--) {
    gettingIt = gettingIt + leSigh.charAt(i);
  }
  return gettingIt;

}
extra = 'Tony';
extra = reverseIt(extra);
console.log(extra)


//  SHOWING THE MIND FUCK OF PASSING THROUGH FUNCTIONS

// var a = 'b';
// var b = 'c';
// var c = 'd';
// var d = 'e';
//
// var result = backwardsOrForwards();
//
// console.log(result);
//
// function backwardsOrForwards(a, b, ){
//   var d = 'a';
//   return b + a + d + c;
// }
