let generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
    let letters = populateLetters();
    let tree = populateTree(letters);
    keys = {};
    generateKeys(tree, "");
    displayCount();
});


let displayCount = function() {
	let charsLeft = counts[0].length;
	let rowCount = Math.ceil(charsLeft / 12);

	for(let i = 0; i < rowCount; i++) {
		let newRow = document.createElement('div');
		newRow.classList.add('row');
		for(let j = 0; j < 12 && j < charsLeft; j++) {
			let currentLetter = counts[0][i*rowCount + j].letter;
			let currentCount = counts[0][i*rowCount + j].count;
			let newCol = document.createElement('div');
			newCol.classList.add('col-sm-1');
			newCol.classList.add('tree-node');
			newCol.innerHTML = "<div>" + currentLetter + currentCount + "</div";
			newRow.appendChild(newCol);
			document.getElementById("wrapper").appendChild(newRow);
		}
		charsLeft -= 12;
	}
}