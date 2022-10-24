function saveToLocalStorage() {
    const rollArray = Array.from(rollSet);
    console.log(rollArray);

    const rollArrayString = JSON.stringify(rollArray);
    console.log(rollArrayString);

    localStorage.setItem("storedRolls", rollArrayString);

}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem("storedRolls");
    const rollArray = JSON.parse(rollArrayString);
    console.log(rollArray);

}