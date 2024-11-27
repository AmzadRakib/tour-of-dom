// getElementsByTagName
const allLi = document.getElementsByTagName('li');
console.log(allLi)
// getElementsByClassName
const allH1 = document.getElementsByClassName('section-title');
for (const h1 of allH1) {
    h1.style.textAlign = 'center';
}

// getElementById
const secondSection = document.getElementById('second-section');
console.log(secondSection);

secondSection.style.color = 'black';
secondSection.style.backgroundColor = 'lime';


// querySelector
// querySelectorAll


// set inner text 

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'My Dynamic li added';
secondList.appendChild(li);

//set inner HTML

const mainContainer = document.getElementById('main-container');
const newSection = document.createElement('section');
newSection.innerHTML = `
<h1>This Is My Dynamic Section title</h1>
<ul>
    <li>hye what's up ?</li>
    <li>You know I add li from js?</li>
    <li>And actually I am success </li>
</ul>
`
mainContainer.appendChild(newSection);