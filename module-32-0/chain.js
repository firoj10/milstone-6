const users = [{id: 1, name:'abul', job:'doctor'}]
console.log(users);


const data = {

    count: 5000,
 data:[
    { id: 1, name:'abul', job:'doctor'},
    { id: 2, name:'abul', job:'doctor'}
    ]

}

// const count = data.count;
// const count = data['count'];


console.log(data.data[0].job);


const user = {
     id: 5000,
     name: 'thomas alba edision',
     addess: {
        street: {
            frist:'35/a birgor ',
            second : 'third flore'
        },
        postoffice: 'chorangi bazer',
        city: 'dhaka'

     }
}

console.log(user.addess.street.second);




