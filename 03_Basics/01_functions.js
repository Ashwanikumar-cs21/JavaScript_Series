function SayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("A");
    console.log("N");
    console.log("I");
}

// SayMyName()

function AddTwoNum(num1,num2){
    console.log(num1+num2);
}

// AddTwoNum(2,3)

const result = AddTwoNum(2,3)
// console.log(result) // Undefined Output


function AddTwoNum(num1,num2){
    let result= num1+num2;
    return result
}
const res = AddTwoNum(2,3)
// console.log("Result:",res)



function logInUserMsg(Username){
    return `${Username} just logged in`
}

// console.log(logInUserMsg("Ashwani"))
// console.log(logInUserMsg()) //undefined


function logInUserMsg(Username){
    if(Username === undefined)
        {
        console.log("Please enter a username");
        return
    }
    return `${Username} just logged in`
}
// console.log(logInUserMsg()) 


function logInUserMsg(Username){
    if(!Username)
        {
        console.log("Please enter a username");
        return
    }
    return `${Username} just logged in`
}
// console.log(logInUserMsg()) 


function logInUserMsg(Username = "John"){ //default value is John
    if(!Username)
        {
        console.log("Please enter a username");
        return
    }
    return `${Username} just logged in`
}
// console.log(logInUserMsg("Ashwani"))  // overwrite the john



function CalculateCartPrice(...num1){ //(...) it is rest operator, which return array of arguments
    return num1;
}
// console.log(CalculateCartPrice(100,200,300,400,500,600));


function CalculateCartPrice(val1,val2,...num1){ //(...) it is rest operator, which return array of arguments
    return num1;
}
// console.log(CalculateCartPrice(100,200,300,400,500,600));



const User = {
    UserName : "Ashwani",
    Price : 199
}

function HandleObject(AnyObject){
    console.log(`User is ${AnyObject.UserName} and price is ${AnyObject.Price}`);
}

// HandleObject(User)
HandleObject({
    UserName : "Vikas",
    Price : 150
})


const myNewArr = [100,200,300,400,500,600]

function secondvalue(getArr){
    return getArr[1]
}

// console.log(secondvalue(myNewArr));
console.log(secondvalue([200,300,400,500,600]));













