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
    for (let i = 0; i < allGlazing.length; i++) {
        if (roll.glazing == allGlazing[i].glazing) {
            adaptation = allGlazing[i].priceAdaptation;
        }
    }
    for (let j = 0; j < allPacksize.length; j++) {
        if (roll.size == allPacksize[i].size) {
            factor = allPacksize[i].priceFactor;
        }
    }
    return (roll.basePrice + adaptation) * factor;
}

const rollSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, basePrice){
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    rollSet.add(roll);
    return roll;
}

function createElement(roll){
    let template = document.querySelector('#cart-template')
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('#cartcard-total');
    console.log(roll.element);

    let rollListElement = document.querySelector('#cartcard-list');
    rollListElement.append(roll.element);

    //grab the html element that need updating
    let cartTitleElement = roll.element.querySelector('#cart-title');
    let cartGlazingElement = roll.element.querySelector('#cart-glazing');
    let cartSizeElement = roll.element.querySelector('#cart-size');
    let imageElement = roll.element.querySelector('.cartpic')
    let priceElement = roll.element.querySelector('.cartprice')
    //update the contents to these targets
    cartTitleElement.innerHTML = roll.type;
    cartGlazingElement.innerHTML = roll.glazing;
    cartSizeElement.innerHTML = roll.size;
    imageElement.src = rolls[roll.type]['imageFile'];
    priceElement.innerHTML = '$' + priceTotal(roll).toFixed(2);

}

const rollOne = addNewRoll(
    "Original",
    "Sugar Milk",
    "1",
    rolls["Original"]
);
const rollTwo = addNewRoll(
    "Walnut",
    "Vanilla Milk",
    "12",
    rolls["Walnut"]
);
const rollThree = addNewRoll(
    "Raisin",
    "Sugar Milk",
    "3",
    rolls["Raisin"]
);
const rollFour = addNewRoll(
    "Apple",
    "Original",
    "3",
    rolls["Apple"]
);
