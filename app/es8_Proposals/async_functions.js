async function async_one() {
	return "One";
}
// async_one().then(response => console.log(response));

// Throws Error & Catch it
// async function async_two() {
// 	throw new Error('Issue with async!');
// }
// async_two().catch(error => console.log(error));

async function async_three() {
	return "Three";
}

async function async_four() {
	const one =  await async_one();
	console.log(one);

	const two = await async_three();
	console.log(two);	
}
// async_four();

async function async_five() {
	const [res_one, res_two] = await Promise.all(
		[async_one(), async_three()]
	)
	console.log(res_one, res_two);
}

async_five();
