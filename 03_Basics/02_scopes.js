// const a = 10
// let b = 20
// var c = 30
// console.log(a,b,c);

if(true){
    const a = 10
    let b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300
if(true){
    const a = 10
    let b = 20
    // console.log("Inner :",a);
}

// console.log(a);


// nested scopes

function FuncOne(){
    const UserName = "Ashwani"

    function FuncTwo(){
        const website = "Github"
        console.log(UserName)
    }
    // console.log(website)

    FuncTwo()
}
// FuncOne()


if(true){
    const UserName = "Ashwani"
    if(UserName == "Ashwani"){
        const website = " Github"
        // console.log(UserName + website);
    }
    // console.log(website);
}
// console.log(UserName);



// ++++++++++++++++++++++++++++imp++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}