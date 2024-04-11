// console.log(2>3)
// console.log(2<3)
// console.log(2>=3)
// console.log(2!=3)
// console.log(2==3)

// console.log("2" > 1)// Output = true
// console.log("02" > 1)// Output = true


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
//The reason is that an equality check == and comparision > < >= =< work differently comparisions convert null to a number, treating it as 0. that's why null >= 0 is true and null > 0 is false.



// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false


// console.log(NaN > 0); // false
// console.log(NaN == 0); // false
// console.log(NaN >= 0); // false

// we should avoid this type of comparision, they can confuse you.




//  Strict check (===) => check by === (triple equal)

console.log("2" == 2); // it return true because it convert string value to a number 
console.log("2" === 2); // it return false because it compare values as well as datatypes.
