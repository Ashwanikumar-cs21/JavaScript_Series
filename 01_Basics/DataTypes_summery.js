//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them

// Primitive DataTypes(7 Types)
//1.String , 2.Number , 3.Boolean , 4. null , 5.undefined , 6.Symbol , 7. BigInt

const name  = "Ashwani" //String
const age = 20 //number
const isLoggedIn = true //Boolean 
const outsidetemp = null //null
let Email ; // undefined

const id = Symbol('123') // Symbol
const anotherid = Symbol('123')

//console.log(id == anotherid);//In this we can pass same value but it treats both value differnt 

const bigNumber =8587888858985966565n // BigInt 
//console.log(typeof bigNumber);




// Non-primitive DataTypes(Reference type)(3 Types)
//1.Array , 2.Objects , 3.Functions 

const Animal = ["Tiger", "Lion", "Elephant", "Horse"]; //Array

//Object 
let Myobj ={
    Name : "Ashwani" ,    
    Age : 20
}

// Function
const myFunction = function(){
    console.log("Hello World");
}
// console.log(Animal);
// console.log(Myobj);
// console.log(myFunction());





//------------------------------------Memory-----------------------------------------
//Stack (For primitive Datatypes) => in stack memory, we create a copy of variables 

let myinstaName = "a_sahu.me"
let oldinstaname = myinstaName
oldinstaname = "its_ars87"

console.log(myinstaName); //Output => a_sahu.me
console.log(oldinstaname);//Output => its_ars87


//Heap (For Non primitive Datatypes) => int stack memory, we get a refernce of the variables

let userOne  ={
    Email : "ashwani@gmail.com",
    upi : "xyz@ybl"
}

let userTwo = userOne

console.log(userOne);
console.log(userTwo);


userTwo.Email = "abc@gmail.com"

console.log(userTwo.Email);//Output => abc@gmail.com
console.log(userOne.Email);//Output => abc@gmail.com
