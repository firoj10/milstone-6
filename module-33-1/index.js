function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => users2(data))
}
function users2(data){
    for(const user of data){
        const ul = document.getElementById('user-list');
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }

}