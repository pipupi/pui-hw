//set up the roll class

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function priceTotal(roll) {
    let cartAdaptation;
    let cartFactor;
    for (let i = 0; i < allGlazing.length; i++) {
        if (roll.glazing == allGlazing[i].glazing) {
            cartAdaptation = allGlazing[i].priceAdaptation;
        }
    }
    for (let j = 0; j < allPacksize.length; j++) {
        if (roll.size == allPacksize[j].size) {
            cartFactor = allPacksize[j].priceFactor;
        }
    }
    //console.log(cartAdaptation);
    //console.log(cartFactor);
    //console.log(roll.basePrice);
    total = (roll.basePrice + cartAdaptation) * cartFactor;
    //console.log(total);
    return total;
    
}

const rollSet = new Set();
let checkoutprice = 0;

function addNewRoll(rollType, rollGlazing, packSize, basePrice){
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(roll);
    return roll;
}

function createElement(roll){
    let template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('#cartcard-total');
    console.log(roll.element);

    let rollListElement = document.querySelector('#cartcard-list');
    rollListElement.prepend(roll.element);

    //grab the html element in the template that need updating
    let cartTitleElement = roll.element.querySelector('#cart-title');
    let cartGlazingElement = roll.element.querySelector('#cart-glazing');
    let cartSizeElement = roll.element.querySelector('#cart-size');
    let imageElement = roll.element.querySelector('.cartpic');
    let priceElement = roll.element.querySelector('.cartprice');

    //grab the html element not in the template that need updating
    let checkoutpriceElement = document.getElementById("checkoutprice");

    //update the contents to these targets
    cartTitleElement.innerHTML = roll.type + " cinnamon roll";
    cartGlazingElement.innerHTML = "Glazing: " + roll.glazing;
    cartSizeElement.innerHTML = "Pack Size: " + roll.size;
    imageElement.src = "./assets/products/" + rolls[roll.type]['imageFile'];
    priceElement.innerHTML = '$' + priceTotal(roll).toFixed(2);

    //update checkout price
    checkoutprice += priceTotal(roll);
    checkoutpriceElement.innerHTML= checkoutprice.toFixed(2);



}

const rollOne = addNewRoll(
    "Original",
    "Sugar milk",
    "1",
    rolls["Original"].basePrice,
);


for (const roll of rollSet) {
    console.log(roll);
    createElement(roll);
    let deleteBtn = roll.element.querySelector(".carttxt")
    deleteBtn.onclick = function(){
        deleteRoll(roll);
    }
}

function deleteRoll(roll) {
    //update checkout price
    checkoutprice -= priceTotal(roll);
    let checkoutpriceElement = document.getElementById("checkoutprice");
    checkoutpriceElement.innerHTML= checkoutprice.toFixed(2);


    //remove target
    roll.element.remove();
    rollSet.delete(roll);
}