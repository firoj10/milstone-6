const numbers = [20,34,45,2,23,22,1];
const bignumber = numbers.filter(number=> number > 20);
const tinynumber = numbers.filter(n=> n > 20);
const even = numbers.filter(num=> num % 2 ===0);
console.log(even);


const product =[
    {id: 1, name: 'watch', price: 2009},
    {id: 2, name: 'tablate', price: 2009},
    {id: 3, name: 'laptop', price: 2009},
    {id: 4, name: 'mobile', price: 200009}
];
const expensive = product.filter(product=> product.price > 100000);
console.log(expensive); gf