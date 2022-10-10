const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};



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
