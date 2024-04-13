const name = "Ashwani"
const repoCount = "20"

// console.log(name + repoCount + " value");

//console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const GameName = new String("AshwaniSahu");

// console.log(GameName[0]);
// console.log(GameName[1]);
// console.log(GameName[2]);
// console.log(GameName[3]);


// console.log(GameName.__proto__);


//to find the length of array.
// console.log(GameName.length);


//to convert string in upper case.
// console.log(GameName.toUpperCase());

// to convert string in lower case.
console.log(GameName.toLowerCase());

//find the letter by index no.
console.log(GameName.charAt(5));

// to find the index no. by letter.
console.log(GameName.indexOf('a'));

// to extract a part of a string.
console.log(GameName.slice(2,7));

// return ASCII value of the letter which present on the index no. 
console.log(GameName.charCodeAt(2));

// return a substring, it is same as slice() method.
console.log(GameName.substring(2,7));

//to concatenate the string.
console.log(GameName.concat(" ",repoCount));


// to remove extra sapce.
let text1 = "   Hello World      ";
let text2 = text1.trim();
let text3 = text2.length;
console.log(text3);

// to remove extra sapce from start.
let text4 = text1.trimStart();
let text5 = text4.length;
console.log(text5);


// to remove extra sapce from end.
let text6 = text1.trimEnd();
let text7 = text6.length;
console.log(text7);

//pads a string from start, padStart(Maxlength,padingElement).
let text8 = "5"
console.log(text8.padStart(5,"X"));

//pads a string in the end, padEnd(Maxlength,padingElement)
console.log(text8.padEnd(5,"X"));


// returns a new string with a number of copies of a string,
console.log(GameName.repeat(2));

//replaces a specified value with another value in a string
let text = "I love cats. Cats are very easy to love. Cats are very popular"
console.log(text.replace("Cats" ,"dogs"));


//replaces all the specified values with another value in a string
console.log(text.replaceAll("cats","dogs"));

// A string can be converted to an array with the split() method
let text9 = "a,b,c,e,d,f";
const myarray = text9.split(",");
console.log(myarray[3]);

