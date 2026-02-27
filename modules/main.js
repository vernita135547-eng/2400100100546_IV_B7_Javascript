//this is destructuring process while importing the function(s)
import {add,subtract,PI} from './math.js'

//default import
import fetchUser from './user.js'

//console is an object
//log is function to print on your console window
console.log(`add(): ${add(10,5)}`)
console.log(`subtract(): ${subtract(10,5)}`)
//formatted string
console.log(`The value of PI: ${PI}`)
console.log('getUser(): ',fetchUser())