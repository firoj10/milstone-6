const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
  
}

const displayMeals = melse => {
    // console.log (melse)..........................
    //step-1 : container element
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = '';
    melse.forEach(meal => {
        console.log(meal)
        // step-2: create chaild for each Element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // step-3 : set content of the chaild...................
        mealDiv.innerHTML = `
        
                <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top h-5">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
    Details
  </button>
            </div>
        `;
        //append child................................
        mealsContainer.appendChild(mealDiv);
    });

}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}



const loadMealDetail =idMeal=>{
    // console.log(idMeal);................................
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]))
    .catch(error=>{
        console.log(error)
    }
)
}
//  ........................................async await.....................................
const loadMealDetail2 = async(idMeal)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
   try{
    const res = await fetch(url);
    const data = await res.json();
    displayMealsDetails(data.meals[0]);
   }
   catch(error){
    console.log(error)
   }
}



const displayMealsDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;  
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
    <img class='img-fluid' src="${meal.strMealThumb}">
    `  
}

loadMeals('node ');

// https:....................................................
// const array = {habbices: ["dancing", "singing", "acting"]};
// console.log(JSON.stringify(array)); 

