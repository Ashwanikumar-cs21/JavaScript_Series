//Declaration of an Array.
const Arr1 = [1,2,3,4,5]
const Arr2 = ["Aman" , "Dhruv" , "Vikas" , "Garv" , "Udit"]
const Arr3 = [1,2,3,4,"Rohit","Mohit"]

//Access the element ;
console.log(Arr1[2])
console.log(Arr2[1])
console.log(Arr3[4])

//Array Methods

//To add an element at the last of the array 
Arr1.push(6)
Arr1.push(7)
console.log(Arr1)

//to remove an element from the last of the array
Arr3.pop()
console.log(Arr3)

// to add an element at the start of the array
Arr1.unshift(0)
console.log(Arr1)

//to remove an element from the last of the array
Arr1.shift()
console.log(Arr1)

// is array contain or not
console.log(Arr1.includes(5))
console.log(Arr1.includes(8))

// return the of the value if present return index else -1
console.log(Arr1.indexOf(5));
console.log(Arr1.indexOf(9));

//to change an Array to String 
const newArr = Arr1.join()
console.log(newArr);
console.log(typeof newArr);


//SLICE , SPLICE

console.log('A' , Arr1);
//Returns a copy of a section of an array from starting index to ending index-1;
const mynarr = Arr1.slice(1,3);
console.log(mynarr);

console.log('B' , Arr1);

//Removes elements from an array,returning the deleted elements from starting index to ending index
const mynarr1 = Arr1.splice(1,3);
console.log(mynarr1);
console.log('C' , Arr1);



