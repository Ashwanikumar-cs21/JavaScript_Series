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
console.log("Result:",res)



