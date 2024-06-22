const BikeBrand = ["RE","HD","Bajaj","Hero","TVS"]
const CarBrand = ["TATA","Mahindra","KIA","Toyota","Honda"]


// to push an Array into an other Array;
// CarBrand.push(BikeBrand);
// console.log(CarBrand);
// console.log(CarBrand[5][1]);

//to concatenate an Array with an other array, and return a new Array .
const BikeCar = CarBrand.concat(BikeBrand);
console.log(BikeCar);


// to change multi Dimension array into 1D array
const newArr =[1,2,3,4,[1,5,6],[1,3,[0,9,[8,7],6,5]]];
const flatArray = newArr.flat(Infinity);
console.log(flatArray);


// to check it is array or not 
console.log(Array.isArray("Ashwani"));

// to convert into array
console.log(Array.from("Ashwani"));

// it cannot convert it;
console.log(Array.from({name :"Ashwani"})); //imp

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));









