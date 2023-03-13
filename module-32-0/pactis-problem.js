// tarnaty oparator
//  const isStudent = true;
//  let paragrap = '';
// if(isStudent){
//     paragrap = 'he is student';
// }else{
//     paragrap = 'porasunai valo na';
// }

// paragrap = (isStudent===true)? 'he is student' : 'porasunai valo na';
// console.log(paragrap);

// tarnaty oparator end


// Array Spreading start

// const number = [2,3,4,6,7,8,9,]
// const number2 = [45,67,56,];
// const newArray = [43, 23, ...number2, 50,40];
// console.log(newArray);

//...........................//
const arr1 = [1,2,3,4,5]
const arr2 = arr1;
arr1.push(99);
arr2.push(99);
console.log(arr1);
console.log(arr2);


//...........................//
const arr3 = [1,2,3,4,5]
const arr4 = [...arr3];
arr3.push(99);
arr4.push(93);
console.log(arr3);
console.log(arr4);
//...........................//
const arr5 = [1,2,3,4,5]
const [frist, second ,...remaning] = arr5;

console.log(frist, second, remaning);

//...........................//
// Array Spreading end




// object Spreading start
//...........................//
const obj1 = {
    name: 'firoj',
    age:34,
    phone: '01837373232',
    address: 'bari nai',
    p: [1,3,5,6,7,8,]

}
const {p} = obj1;
const obj2 = {...obj1};
// const { name,  address:bari , age, phone, ...p} = obj1;
console.log(p);

//...........................//

const petOwner = {
    name: "firoj hasan",
    contact:{
        phone: "68373389",
        email: "xyz@gmail.com",
    },
    pet: {
        name: "Lofie",
        info:{
            color:"black",
            weight: "1.2kg"
        },   
    },
};
//...........................//
//...........................//
//...........................//
//...........................//
//...........................//
//...........................//
//...........................//

//...........................//
//...........................//

//...........................//
//...........................//

//...........................//

//...........................//
//...........................//
//...........................//
//...........................//

// object Spreading end