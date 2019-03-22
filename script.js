const container = document.querySelector('#container');

function createGrid(dim=16) {
	const grid = document.querySelector('.container');
	grid.style.cssText = `grid-template-columns: repeat(${dim}, auto);`

	for (let i = 0; i < (dim * dim); i++) container.appendChild(document.createElement('div')).classList.add(`item${i+1}`,'grid-item')
}
 
createGrid(); 

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
	dim = prompt('Enter a number: ')
	const divs = document.querySelectorAll('.grid-item');
	divs.forEach((div) => {
		container.removeChild(div)
	})
	createGrid(dim);
})



