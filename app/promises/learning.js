// Basic Promise Function
let p = new Promise((resolve, reject) => {
	reject('Rejected Promise Data');
	// resolve('Resolved Promise Data');	
})

p.then(response => console.log(response))
 .catch(error => console.log(error));

// Advanced
let q = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Resolved Promise Data after 3 seconds..!'), 3000);	
})

q.then(response => console.log(response))
 .catch(error => console.log(error));

 console.log('After Promise Consumption..!');

