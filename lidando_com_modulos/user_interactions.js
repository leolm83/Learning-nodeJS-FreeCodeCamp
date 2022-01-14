const stringUtils = require("./string_utils.js")
//Modules only share the minimum
//if you have an execution inside of the root of the file, when you import
//this will execute
//something like this after the function sayHi, console.log("WHOOOPS")
//but the rest isnt executed!
const sayHi = (name) =>{
    console.log(`Hello there ${stringUtils.capitalize(name)}`);
}
module.exports = {sayHi}
