const polapain = [
    {name: 'firoj hasan', job: 'sorkari' , salary: 17000},
    {name: 'firoj hasan', job: 'besorkari' , salary: 25000},
    {name: 'firoj hasan', job: 'sorkari' , salary: 35000},
    {name: 'firoj hasan', job: 'besorkari' , salary: 45000},
    {name: 'firoj hasan', job: 'sorkari' , salary: 85000},
    {name: 'firoj hasan', job: 'besorkari' , salary: 12000},

];

// sorkari 20000 || besorkari 40000


const jamais = polapain.filter(pola => (pola.job === "sorkari" && pola.salary >= 20000) || (pola.job === 'besorkari' && pola.salary >= 35000) ) ;

console.log(jamais);
