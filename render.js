let generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
    counts = [];
    keys = {};
    let letters = populateLetters();
    let tree = populateTree(letters);
    generateKeys(tree, "");
    displayCount();
    select2();
});


let displayCount = function() {
	let charsLeft = counts[0].length;
	let rowCount = Math.ceil(charsLeft / 12);
	document.getElementById('step1-content').innerHTML = "";
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
			//insert after step1-title
			document.getElementById("step1-content")
			.appendChild(newRow);
		}
		charsLeft -= 12;
	}
}

let select2 = function() {
	let content = document.getElementById("step1-content").cloneNode();
	content.id = "step2-content";
	content.innerHTML = document.getElementById("step1-content").innerHTML;
	let lastRow = content.childNodes[content.childNodes.length - 1];
	lastRow.childNodes[lastRow.childNodes.length - 1].childNodes[0].style.background = "green";
	lastRow.childNodes[lastRow.childNodes.length - 2].childNodes[0].style.background = "green";
	document.getElementById("wrapper").appendChild(content);
}