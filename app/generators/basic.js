// Defining a Generator
function* countMaker() {
	let count = 0;
	while (count < 3) {
		yield count += 1;
	}
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);