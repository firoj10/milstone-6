//1. defaule paramiter 
 function calculateSalary( salary, Tax=0.25, bonus=0){
    const remaning = salary - salary*Tax ;
    const total = remaning+ bonus;
    return total;
 }


 //tamplate string 

 const elementHtml = `
 <div>
 
 <h3>Name:</h3>
 <p>address: </p>
 <p>salary: ${calculateSalary( 100, 0 , 0)} </p>
 
 <p>address: ${number[2]}</p>

 
 </div>
 `
//arrow function
const dobleIt = x=> x*2;
const calculateSalary = ( salary, Tax=0.25, bonus=0) =>  salary - salary*Tax + bonus;

// spread 
const ages = [11, 27, 49, 60];
const newAges = [ ...ages, 11, 27, 49, 60];

//distructuring
const {x, y, z, ...c} = {x:45, y:12, z:33, name:'shakib al hasan', salary: 5999}
