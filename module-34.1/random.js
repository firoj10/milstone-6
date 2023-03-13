const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser (data))
}
const displayUser = user => {
    const gender = document.getElementById('gender');
    gender.innerHTML = user.results[0].gender;

    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;


console.log(user.results[0].picture.medium);
 const location = document.getElementById('location');
 location.innerHTML= user.results[0].location.street.name +', '+user.results[0].location.city+ ', '+user.results[0].location.country;
 const photos =  document.getElementById('img')
 photos.innerHTML = user.results[0].picture.medium;
}

loadUser() ;

