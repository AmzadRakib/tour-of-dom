// where to add
const mainContainer = document.getElementById('main-container');

// what to be add 

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food list';
section.appendChild(h1);
const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Burger';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Pasta';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Pizza';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Steak';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);

// inner HTML

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress list </h1>
<ul>
    <li>T-shirt</li>
    <li>Pant</li>
    <li>Shirt</li>
    <li>Pnajabi</li>
</ul>

`

mainContainer.appendChild(sectionDress);