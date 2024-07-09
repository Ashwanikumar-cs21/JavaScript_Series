const User = {
    Name : "Ashwani",
    userId : 1502,

    welcomeMsg :function(){
        // console.log(`${this.Name} ,welcome to website`);
        // console.log(this);
    }

}
User.welcomeMsg()
User.Name = "John"
User.welcomeMsg()

// console.log(this);


// function one(){
//     let Name = "ASHWANI"
//     console.log(this.Name) //Cannot work 
// }
// one()


// const one = function(){
//     let Name = "ASHWANI"
//     console.log(this.Name)
// }
// one()


// const one = () => {
//     let Name = "ASHWANI"
//     console.log(this)
// }
// one()


// const addTwo = (n1 , n2) => {
//     return n1 + n2
// }
// console.log(addTwo(3,4));


// Implicit return 

// const addTwo = (n1 , n2) => n1 + n2

// const addTwo = (n1 , n2) => (n1 + n2)

const addTwo = (n1 , n2) => ({username : "Ashwani"})


console.log(addTwo(3,4));




// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


