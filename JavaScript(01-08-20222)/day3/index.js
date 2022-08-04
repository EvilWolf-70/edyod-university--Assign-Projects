//postfix and prefix
//x++ ++x

//postfix
let myScore = 90;
let myLatestScore = myScore++ + 10; //90 + 10 ----> 90 + 1
console.log("myLatestScore---" + myLatestScore);
console.log("myScore---" + myScore);

//prefix
let myMarks = 80; //80 + 1
let myCurrent = ++myMarks + 10;
console.log("mycurrent--" + myCurrent);
console.log("myMarks" + myMarks);

//logical operator
let a = 100;
let b = 200;
let c = 0;
console.log(a > 0 || (b < 0 && c < 0));

//!-not operator
//!0 give the value 1
//!1 give 0
console.log(!(a < b) || b > 0);
console.log(!(a < b) && b > 0);
