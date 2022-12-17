
//Parse the URL parameter and store the current roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
//specified by ?roll=somthing in HTML hrefs
const stakeholderType = params.get('stakeholder');


//Extract the current roll’s information
let currentStakeholder = stakeholders[stakeholderType];
let name = currentStakeholder['name'];
let txt = currentStakeholder['txt'];
let imageFile =currentStakeholder['imageFile'];

function updateDetail(){

    let header = document.querySelector('#stakeholderHeader');
    let image = document.querySelector('#stakeholderImage');
    let text = document.querySelector('stakeholderTxt');
    
    header.innerText = stakeholderType ;
    image.src = "./assets/img/" + imageFile; 
    text.innerText = txt;
    
}

updateDetail();