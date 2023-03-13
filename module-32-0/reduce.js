const number = [1,2,3,4,5];
// .reduce (accumulatorFunction , inttial value)
// accumulatorFunction use tow paramiter


const total = number.reduce((previous, current)=>previous + current, 0)

const totals = number.reduce((previous, current)=>{
   console.log(previous + current)
 return previous + current;
},0);
