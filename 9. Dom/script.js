const mybody = document.body
console.log(mybody);
const box2 = document.getElementById('box-2');
console.log(box2);
const divs = document.getElementsByTagName('p');
console.log(divs);
const box1 = document.getElementById('box-1')
box1.style.backgroundColor = 'Red'

const boxes = document.getElementsByClassName('box');
for(let i=0; i<boxes.length; i++)
{
    boxes[i].classList.add('round-border');
}
box1.classList.remove('round');
////------------------Adding elements-----------------////
const newpara = document.createElement('p')
newpara.innerText = 'This is the content inside the new para';

const container = document.getElementById('container');
container.appendChild(newpara);