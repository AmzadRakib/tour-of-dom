// get element by tag name 

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    // console.log(li.innerText);
}

const Headings = document.getElementsByTagName('h1');
for (const heading of Headings) {
    // console.log(heading.innerText);
}

// get element by id name 
const fruitsTitle = document.getElementById('Fruits-title');
// console.log(fruitsTitle.innerText);
const fruitsChange = fruitsTitle.innerText = 'Fruits change using js';
// console.log(fruitsChange);

//Get elements by class name :

// const myPlaces = document.getElementsByClassName('my-places');
// for (const place of myPlaces) {
//     // console.log(place.innerText);
// }

// query selector 

// which is provide you just a first element of container 

const bandContainer = document.querySelector('.band-container li').innerText;
// console.log(bandContainer);


// query selector all
// which provide all elements of container 

const placeContainer = document.querySelectorAll('#places-container li');
for (const place of placeContainer) {
    // console.log(place.innerText);
}


const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.backgroundColor = 'lightgray';
    section.style.textAlign = 'center';
    section.style.padding = '20px'
    section.style.marginBottom = '20px'
    section.style.borderRadius = '20px'
}