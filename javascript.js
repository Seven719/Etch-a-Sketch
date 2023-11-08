let size = 0;
let mouseDown = false;

const clear = document.querySelector('#clear');
const container = document.querySelector('#container');
const promptForSize = document.querySelector('#grid-size')

promptForSize.addEventListener('click', () => {
	size = prompt("Size Of Grid");
	if (0 < size && size <= 100) {
		createGrid(size);
	}
	else {
		if (size < 0) {
			alert("Size is less than 1. Defaulting to 16");
		}
		else {
			alert("Size is more than 100. Defaulting to 16");
		}
		size = 16;
		createGrid(size);
	}
})

clear.addEventListener('click', () => {
	resetGrid();
})

container.addEventListener('mousedown', () => {
    mouseDown = true;
});

container.addEventListener('mouseup', () => {
    mouseDown = false;
});

function resetGrid () {
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	createGrid(size)	
}

function createGrid(size){
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size * size; i++) {
		let cell = document.createElement('div');
		cell.style.background = "#D8DBE2";
		container.appendChild(cell);
		
		cell.addEventListener('mouseover', (e) => {
			if(mouseDown) {
				changeColor(e);
			}
		})

		cell.addEventListener('mousedown', (e) => {
			e.preventDefault();
			changeColor(e);
		})

		container.appendChild(cell);

		function clearGrid() {
			clear.addEventListener('click', (e) => {
				cell.style.background = "#D8DBE2";
			})
		}

		clearGrid();
	}
}

function changeColor(e) {
	if (e.type === 'mouseover' && !mouseDown) return
	const randomR = Math.floor(Math.random() * 256)
	const randomG = Math.floor(Math.random() * 256)
	const randomB = Math.floor(Math.random() * 256)
	e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

createGrid(size);
