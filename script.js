const container = document.querySelector('#container');

let x;
x = 256

function createGrid(x) {
	for (let i = 0; i < x; i++) container.appendChild(document.createElement('div')).classList.add(`item${i+1}`,'grid-item')
}
 
createGrid(x); 


const cell = document.querySelectorAll('.grid-item'); 

container.addEventListener('mouseover', function(e) {
	const item = container.querySelector(`.${e.srcElement.classList[0]}`);
	item.style.cssText = 'background: red';
})

const button = document.querySelector('button');
button.addEventListener('click', function() {
	const items = container.querySelectorAll('div[style]');
	items.forEach(function(item) {
		item.removeAttribute('style'); 
	})
	//dimensions = prompt('Enter a number: ')
	//createGrid(dimensions);
})



