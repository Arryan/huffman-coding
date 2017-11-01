let input = document.getElementById("input");

let populateLetters = function() {
	let letters = [];
	let str = input.value;

	for(let i = 0; i < str.length; i++) {
		let letterIndex = -1;
		for(let j = 0; j < letters.length; j++) {
			if(letters[j].letter === str.charAt(i)) {
				letterIndex = j;
				break;
			}
		}
		if(letterIndex < 0) {
			letters.push({'letter':str.charAt(i),'count':1});
		}
		else {
			letters[letterIndex].count++;
		}
	}
	letters.sort(function(a,b) {
		return b.count - a.count;
	})
	return letters;
}

let populateTree = function(letters) {
	while(letters.length > 1) {
		let right = letters.pop();
		let left = letters.pop();
		let newNode = new node(left,right);
		let newCount = left.count + right.count;
		letters.push({'letter': newNode,'count': newCount});
		//swap letters until sorted
		for(let i = letters.length - 1; i > 0; i--) {
			if(letters[i].count > letters[i - 1].count) {
				temp = letters[i];
				letters[i] = letters[i-1]
				letters[i-1] = temp;
			}
			else break;
		}
	}
	//console.log(letters[0]);
	return letters[0];
}

let generateKeys = function(tree, key) {
	if(typeof(tree.letter) === "string")
		console.log(tree.letter + " : " + key);
	else {
		generateKeys(tree.letter.left, key + "0");
		generateKeys(tree.letter.right, key + "1");
	}
}

function node(left,right) {
	this.left = left;
	this.right = right;
}