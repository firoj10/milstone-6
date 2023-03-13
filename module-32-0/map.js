const numbers = [2, 4 , 4, 44, 66];

function getDoubles(numbers){


const output = [];

for(const number of numbers){
    const double = dobleIt(number);
    output.push(double);
}
return output;
}


// function dobleItOld(num){
//     return num*2;
//for every  elements of the array do somthing
// store the result in an array 
//return array
// }
const dobleIt = num => num*2;



const makeDouble = numbers.map(dobleIt);
const makeDouble2 = numbers.map(num => num*2);
const makeDouble3 = numbers.map(x => x*2);
const fiveTime = [1,2,3,4,5,].map(x=> x*5);
console.log(fiveTime);
//purpose 
//1. get and Array
//2. for eve

const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);


