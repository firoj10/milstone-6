// problem solving
const student = [
    {name: 'firoj hasan', email: 'f@gmail.com' , avg:56,  fiftyPercent: true},
    {name: 'Sujon bro', email: 'SujonBd@gmail.com' , avg:58,  fiftyPercent: true},
    {name: 'Sakil bro', email: 'sakil@gmail.com' , avg:55,  fiftyPercent: true},
    {name: 'Ovi bro', email: 'Ovi@gmail.com' , avg:46,  fiftyPercent: true},
    {name: 'abir bro', email: 'abir@gmail.com' , avg:52,  fiftyPercent: true},
    {name: 'acer bro', email: 'acer@gmail.com' , avg:76,  fiftyPercent: true},
    {name: 'vabi bro', email: 'vabi@gmail.com' , avg:16,  fiftyPercent: true},
    {name: 'Mira bro', email: 'mira@gmail.com' , avg:15,   fiftyPercent: true},
    {name: 'Aysaca parvin bro', email: 'aysaca@gmail.com' , avg:60,  fiftyPercent: true},
    
]

const scic = student.filter(s => s.avg >= 50 && s.fiftyPercent === true);

const names = scic.map((st) => st.name)

console.log(names);