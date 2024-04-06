// Scope in javascript
// const globalScope = "i am from global scope";

// function exampleFunction (){
//     const localScope = "i am from local Scope";
//     console.log(localScope); // i am from local Scope
//     console.log(globalScope); // i am from global scope
// }

// exampleFunction()

// console.log(globalScope);  // logs "I'm a global variable"
// console.log(localScope); // ReferenceError: localVar is not defined

// output :
// i am from local Scope
// i am from global scope
// i am from global scope
// ReferenceError: localScope is not defined

// --------------------------------------------------------------------------------------

// Closure in JavaScript

// function outerFunc(){
//     const outerVariable = " I am from outer";

//     function innerFunc(){
//         const innerVariable = "I am from inner";
//         console.log(innerVariable);
//         console.log(outerVariable);
//     }
//     innerFunc();
// }
// outerFunc();

// output :
// I am from inner
// script.js:31  I am from outer

// --------------------------------------------------------------------------------------

// Hoisting in javascript :

// console.log(hoisting);
// const hoisting = 'sanjai'; 

// function hoistingfunc(){
//     console.log(hoistinginsidefunc);
//     const hoistinginsidefunc = ' kannan ';
// }
// hoistingfunc()

// output
// undefined
// undefined

// --------------------------------------------------------------------------------------
