const score = 400
// console.log(score);

const balance = new Number(400)
// console.log(balance);


// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));


const num = 21.895
// console.log(num.toPrecision(3));


const zeros = 100000000;
// console.log(zeros.toLocaleString('en-IN'));



//_____________________________Maths_______________________________________________

console.log(Math);

//To get absolute value 
// console.log(Math.abs(-4));

// to get round up value 
// console.log(Math.round(4.3));

//to get upper value of number
// console.log(Math.ceil(4.4));

//to get lower value of number
// console.log(Math.floor(4.6));


// to get max value in an array
// console.log(Math.max(2,3,42,1,4,67,89,987654,56,54,56,54,65));

// to get min value in an array
console.log(Math.min(2,3,42,1,4,67,89,987654,56,54,56,54,65));

// to get random value b/w 0 and 1
console.log(Math.random());

// value greater than 1;
console.log((Math.random()*10) +1);

// only integer value b/w 1 and 10
console.log(Math.floor(Math.random()*10) +1);


// get a random num b/w min value and max value 
const min = 5;
const max = 15;

console.log(Math.floor(Math.random()* (max - min + 1)) + min);



