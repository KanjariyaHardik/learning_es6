// Fetch Keys form Object 
let obj_key = {a: 'One', b: 'Two', c: 'Three'};
let keys = Object.keys(obj_key);
console.log(keys);

// Fetch Keys form Object 
let obj_val = {a: 'One', b: 'Two', c: 'Three'};
let values = Object.values(obj_val);
console.log(values);

// Entries => Convert Key Value Pair into array
// O/p : [Array[2], Array[2], Array[2]] -> [['a', 'One'], ['b', 'Two'], ['c', 'Three']]
let obj_entries = {a: 'One', b: 'Two', c: 'Three'};
let entries = Object.entries(obj_entries);
console.log(entries);


// Entries
let obj_entry = {a: 'One', b: 'Two', c: 'Three'};
let entry = Object.entries(obj_entry);
for (let ent of entry) {
	console.log(`Key: ${ent[0]}, Value: ${ent[1]}`)
}
