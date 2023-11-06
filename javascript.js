const container = document.getElementById('container');
const rows = document.getElementsByClassName('gridRow');

for (let i = 1; i <= 16; i++){
	let row = document.createElement('div');
	container.appendChild(row).className = "gridRow";
}

for (let b = 0; b <= 16; b++) {
	for (let j = 1; j <= 16; j++) {
		let column = document.createElement('div');
		column.textContent = (b + 1) * j;
		rows[b].appendChild(column).className = 'column';
	}
}
