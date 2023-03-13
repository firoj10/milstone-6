const loadPhons = async(searchValue, dataalimit)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayPhons(data.data, dataalimit);
    // console.log(data.data[0].brand);
    // console.log(data.data);
 
}


const displayPhons  = (phones, dataalimit) => {
    // console.log (melse)..........................
    //step-1 : container element
    const phonesContainer = document.getElementById('phons -container');
    phonesContainer .innerHTML = '';
// displayPhons  all
    const showAll = document.getElementById('show-all');
    if(dataalimit && phones.length>10){
        phones = phones.slice(0, 9);
        showAll.classList.remove('d-none');
    }else{
        showAll.classList.add('d-none');
    }

 
    const naPhone = document.getElementById('no-found-phone');
    if(phones.length === 0){
        naPhone.classList.remove('d-none');
    }else{
        naPhone.classList.add('d-none');
    }
    phones.forEach(phone => {
        // console.log(phone.brand);
        // step-2: create chaild for each Element
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        // step-3 : set content of the chaild...................
        phoneDiv.innerHTML = `
        
                <div class="card p-5">
                <img src="${phone.image}" class="card-img-top ">
                <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                <button onclick="loadPhoneDetail('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">
    show Details
  </button>
            </div>
        `;
        phonesContainer.appendChild(phoneDiv);
     
    });
    // stop-loader
    toggleSpanner(false);
};
const processSearch = (dataalimit) =>{
     // start-loader
     toggleSpanner(true);
     const searchText = document.getElementById('search-field');
     const searchValue = searchText.value;
 
     loadPhons(searchValue, dataalimit); 
}


//handel click btn
document.getElementById('btn-serch').addEventListener('click', function(){
    processSearch(10);
});

//search input field enter key hankler
document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        processSearch(10);
    }
  
});



const toggleSpanner = isloding =>{
    const loderSection = document.getElementById('loder');
    if(isloding){
        loderSection.classList.remove('d-none')  
    }else{
        loderSection.classList.add('d-none')  
    }
}

// load show all
document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
});

const loadPhoneDetail =async id=>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res =await fetch (url );
    const data = await res.json();
    displayPhoneDetails(data.data);

}
const displayPhoneDetails = phone =>{
    const mobileTitle = document.getElementById('phoneDetailModalLabel');
    mobileTitle.innerText = phone.name;
    const mobileDtails = document.getElementById('phone-details');
    mobileDtails.innerHTML = `
    <p>Relese Date ${phone.releaseDate ? phone.releaseDate : 'No Relasce Found'}</p>
    <p>Relese Date ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage informaction Found'}</p>
    <p>other ${phone.others ? phone.others.Bluetooth : 'Not Bluetooth Found'}</p>
    `
}
  


// loadPhons();