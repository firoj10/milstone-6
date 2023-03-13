const friend = ['tom', 'tom crose' , 'tom hanks', 'tom soliman'];
const fristlatter = friend.map(friend=> friend[0]);
console.log(fristlatter);
const nameLengths = friend.map(friend=> friend.length);
console.log(nameLengths);


const product =[
    {id: 1, name: 'watch', price: 2009},
    {id: 2, name: 'tablate', price: 2009},
    {id: 3, name: 'laptop', price: 2009},
    {id: 4, name: 'mobile', price: 2009}
];
// const item = product.map(product=> product.name);
// const items = product.map(p=> p.price);
// console.log(item );
// console.log(items );

product.forEach(product => console.log(product));