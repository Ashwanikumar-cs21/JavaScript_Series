
//Create Objects


//Object literals
const mysym = Symbol("key1")

const JsUser = {
    name : " Ashwani",
    "Full Name" : "Ashwani Sahu",
    age : 20,

    // use a SYMBOL in a object.
    [mysym] : "mykey1",

    location : "Etah",
    Email : "ashwani@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday" ,"Saturday"] 
}

//Access value 

console.log(JsUser.Email);

console.log(JsUser["Email"]); //Best Way

// can not access full name using .full Name
console.log(JsUser["Full Name"]);

console.log(JsUser[mysym]);

//change in object
JsUser.Email = "ashwani@chatgpt.com"
console.log(JsUser["Email"])

// freeze the object
// Object.freeze(JsUser);
JsUser.Email = "ashwani@gla.com"
console.log(JsUser);



// function
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());