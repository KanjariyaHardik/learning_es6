// Basic Usage
const root = 'http://jsonplaceholder.typicode.com/posts/1';

fetch(root, { method: "GET"})
	.then(response => response.json())
	.then(json => console.log(json));

// Call Google Sample Books API
const root_url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root_url, { method: "GET"})
	.then(response => response.json())
	.then(json => console.log(json));	