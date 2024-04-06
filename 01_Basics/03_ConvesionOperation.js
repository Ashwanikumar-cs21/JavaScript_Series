let score = "33";
// let score = null; //Op->0
// let score = undefined; //op-> NaN
// let score = true; // op->1
// let score = "Ashwani" // op->NaN
let num = "34abc"

//for know the type of variable;


//console.log(typeof score);
        //Or
//console.log(typeof(score));
//console.log(typeof(age));



//TypeCasting of variable
let ValueInNumber = Number(score);
//console.log(typeof(ValueInNumber));



let numInNumber = Number(num);
//console.log(typeof(numInNumber));
//console.log(numInNumber); //op->NaN (Not a Number)

 /*
 Outputs

    "33" ->33
    "33abc" -> NaN
    null ->0
    undefined ->NaN
    true -> 1 , false ->0
 */
let age = 18;

let AgeInString =String(age);
//console.log(typeof(AgeInString));

//let isLoggedIn = 0
//let isLoggedIn = ""
let isLoggedIn = "Ashwani"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn))
console.log(booleanIsLoggedIn);


/*
Outputs
0 -> false
1 -> true
"" -> false
"Ashwani" -> true
*/
