/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// ----------------- Vanilla JavaScript Function -----------------------
function addTwoNumbers(a , b){
    //code block
    return a + b;
}
let sum = addTwoNumbers(3, 5)
console.log(sum)

// ----------------- ES6 Arrow Function With Parameters --------------------
// 1. USUALLY const is used for arrow functions
// { } is usually used for more complex logic otherwise it's not needed see like 24
const addTwoNumbers1 = (a,b) => {
    // code block
    return a + b;
}
let sum1 = addTwoNumbers1(3,6);
console.log(sum1)

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a , b) => a + b;
let sum2 = addTwoNumbers2(3,7);
console.log(sum2)

// sometime (a+b) can be seen as well it's also valid as above, see below
const addTwoNumbers3 = (a , b) => (a + b);
let sum3 = addTwoNumbers3(3,8);
console.log(sum3)

// Implicit Returns
// below saySomething function has only one parameter that is "Hello World" so its no () was use but if there are many this will be used
const saySomething = message => console.log(message)
// above message is the only parameter so no ()
saySomething("I have no () as i have only one parameter message");

// If there is no parameter at all then just () is enough
const sayHello = () => console.log('I have just (), as I dont have any parameter at all')
sayHello();

// Returning Multiple Lines
//  Here is no {} for multi line as its for complex logic 
const returnMultipleLines = () => (
    `<p>Hello world</p>`
)
console.log(returnMultipleLines())