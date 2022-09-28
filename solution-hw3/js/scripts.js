//creating two arrays of glazing and packsize options for user to select

let allGlazing = [
    {   glazing:'Keep original',
        priceAdaptation: 0.00,
    },
    {   glazing:'Sugar milk',
        priceAdaptation: 0.00,
    },
    {   glazing:'Vanilla milk',
        priceAdaptation: 0.50,
    },
    {   glazing:'Double chocolate',
        priceAdaptation: 1.50,
    },
];
let allPacksize = [
    {   size:'1',
        priceFactor: 1,
    },
    {   size:'3',
        priceFactor: 3,
    },
    {   size:'6',
        priceFactor: 5,
    },
    {   size:'12',
        priceFactor: 10,
    }, 
];

//select the dropdown menu that is currently empty to load in the options

let glazingElement = document.querySelector('#glazingSelect');
let packsizeElement = document.querySelector('#packsizeSelect');

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
    priceTotal = (2.49 + allGlazing[glazingInd].priceAdaptation) * allPacksize[packsizeInd].priceFactor;
    detailTotal.innerText = '$' + priceTotal.toFixed(2);

}

// hint from the car lab code: addEventListener to 
// call get current selected option and call updatePrice function when user changes options

glazingElement.addEventListener('change', selectGlazing)
packsizeElement.addEventListener('change', selectPacksize)
