let generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
    let letters = populateLetters();
    let tree = populateTree(letters);
    keys = {};
    generateKeys(tree, "");
    displayCount();
});


let displayCount = function() {
	let keysArr = Object.keys(keys);
	let charsLeft = keysArr.length;
	let rowCount = Math.ceil(charsLeft / 12);

	for(let i = 0; i < rowCount; i++) {
		let newRow = document.createElement('div');
		newRow.classList.add('row');
		document.getElementById("wrapper").appendChild(newRow);
		for(let j = 0; j < 12 && j < charsLeft; j++) {
			let newCol = document.createElement('div');
			newCol.classList.add('col-sm-1');
			newCol.classList.add('tree-node');
			newCol.innerHTML = "e";
			document.getElementById("wrapper").childNodes[i+5].appendChild(keys[keysArr[i*rowCount + j]]);
		}
		charsLeft -= 12;
	}
}