//Singleton objects

// const instaUser = new Object() //Singleton object

const instaUser = {} //Non-singleton object
instaUser.id = "123a"
instaUser.Name = "John"
instaUser.IsLoggedIn = false

// console.log(instaUser);

const newUser = {
    email :"Some@gmail.com",
    userName :{
        userfullName :{
            FirstName:"Ashwani",
            LastName :"Sahu"
        }
    }
}
// console.log(newUser.userName.userfullName.FirstName)


const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj3 = {
    5 : "e",
    6 : "f"
}

// Merge the Objects
// const obj3 ={obj1 ,obj2}  //Object ke andar object
// const obj3 = Object.assign({},obj1 , obj2)  //{} are optional.
// console.log(obj3);

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const users = [
    {
        id : "1", 
        email : "a@gmail.com"
    },
    {
        id : "1", 
        email : "a@gmail.com"
    },
    {
        id : "2", 
        email : "a@gmail.com"
    },
    {
        id : "3", 
        email : "a@gmail.com"
    },
    {
        id : "4", 
        email : "a@gmail.com"
    }
]

users[1].id

// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('IsLoggedIn'));



// Objects Destructuring

const course = {
    couresName : "Js in Hindi",
    price : "999",
    CourseInstructor : "Hitesh"
}
//  course.CourseInstructor

const {CourseInstructor : instructor}  = course
// console.log(CourseInstructor);
console.log(instructor);




// API

// {
//     "Name" : "Ashwani",
//     "Email" : "abc@gmail.com",
//     "Location" : "Etah"
// }


[
    {},
    {},
    {}
]