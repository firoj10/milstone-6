const loadUser = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayUser (data))
}
const displayUser = countries => {
    //console.log(countries );
    const countriescontainer = document.getElementById('all-country');
    // for(country of countries){
    //     console.log(country );
    // }
  //  ......foreach.............................................
  countries.forEach(country=> {
        console.log(country )
        const countriesdiv = document.createElement('div');
        countriesdiv.classList.add('country');
        countriesdiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>capital:${country.capital ? country.capital[0] : 'no Capital'}</p>
        <button onclick="loadCountryDetals('${country.cca2}')">detels</button>
        
        `;
        countriescontainer .appendChild(countriesdiv);
    })
}
const loadCountryDetals = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    // console.log('details comming soon ' ,code);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetals(data[0]));
}
 const showCountryDetals = country =>{
    const detailContainer  = document.getElementById('country-detals');
    detailContainer.innerHTML = `
    <h3>name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
 }
loadUser () ;