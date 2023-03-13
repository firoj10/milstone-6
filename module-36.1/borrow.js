const kodomali = {
name: 'kodom ali',
money: 300,
subject: ['calculaction', 'aljebra', 'geometric'],
exam: function(){
    return this.name + 'is an exam';
},
improveExam: function(subject){
    this.exam();
    return `${this.name}is an exam ${subject}`;
},
treaDey: function(amount, tips){
    this.money =  this.money - amount - tips;
    return this.money;
},

}
const result = kodomali.exam();


const badamAli = {
    name: 'kacha badam',
    money: 8000
}

const result2 = kodomali.exam.call(badamAli);
console.log(result2);

const result3 = kodomali.treaDey.apply(badamAli, [400, 40]);
console.log(result3);
// const result3 = kodomali.treaDey.call(badamAli, 400, 40);
// console.log(result3);


const result5 = kodomali.treaDey.bind(badamAli);
const result6   = result5(1000, 100)
console.log(result6);


// const obj = {a:1, b:2, c:3, length:2 };
// console.log(Object.keys(obj).length)

const a = (name = 'chokina')=>'name';
console.log(a());
