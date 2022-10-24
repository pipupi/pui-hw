
//select the dropdown menu that is currently empty to load in the options

let glazingElement = document.querySelector('#glazingSelect');
let packsizeElement = document.querySelector('#packsizeSelect');
let addtocartElement = document.querySelector('#addtocart');
//using loops to add options into the selected menus
//value is set to be the index

for (let i = 0; i < allGlazing.length; i ++){
    var option = document.createElement('option');
    option.innerText = allGlazing[i].glazing;
    option.value = i.toString();
    glazingElement.add(option);
}

for (let i = 0; i < allPacksize.length; i ++){
    var option = document.createElement('option');
    option.innerText = allPacksize[i].size;
    option.value = i.toString();
    packsizeElement.add(option);
}

// get both of the selected options from the two menus
// because the array input is loaded in the same seq of the menu
// we get the same array element as represented in the menu from the index
// calculate and update the total price


//initialize the selected index for both menu
let glazingInd = 0;
let packsizeInd = 0;

//hint from the car lab code: keep track of the selected option
function selectGlazing() {
    glazingInd = parseInt(this.value);
    updatePrice();
}

//hint from the car lab code: keep track of the selected option
function selectPacksize() {
    packsizeInd = parseInt(this.value);
    updatePrice();
}

function updatePrice() {
    let detailTotal = document.querySelector('#detailTotal');
    priceTotal = (basePrice + allGlazing[glazingInd].priceAdaptation) * allPacksize[packsizeInd].priceFactor;
    detailTotal.innerText = '$' + priceTotal.toFixed(2);

}

//set up the roll class

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
//Create an empty array called cart
const cart = [];

//Parse the URL parameter and store the current roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
//specified by ?roll=somthing in HTML hrefs
const rollType = params.get('roll');

let rollGlazing = allGlazing[glazingInd].glazing;
let packSize = allPacksize[packsizeInd].size;


//Extract the current roll’s information
let currentRoll = rolls[rollType];
let basePrice = currentRoll['basePrice'];

function updateDetail(){
    let imageSrc = currentRoll['imageFile'];
    let header = document.querySelector('#productHeader');
    let image = document.querySelector('#productImage');
    let total = document.querySelector('#detailTotal');
    
    header.innerText = rollType + "Cinnamon Roll";
    image.src = "./assets/products/" + imageSrc; 
    total.innerText = "$" + currentRoll['basePrice'];

}
function updateCart(){
    let newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(newRoll);
    console.log(cart);

}

// hint from the car lab code: addEventListener to 
// call get current selected option and call updatePrice function when user changes options

glazingElement.addEventListener('change', selectGlazing)
packsizeElement.addEventListener('change', selectPacksize)
addtocartElement.addEventListener('click', updateCart)  
updateDetail();




