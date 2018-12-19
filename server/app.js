const express = require('express')
const app = express()
var http = require('http');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', (req, res, ) => {

	http.get('http://jsonplaceholder.typicode.com/posts', (resp) => {
		let postsStr = '';

		resp.on('data', (chunk) => {
			postsStr += chunk;
		});

		resp.on('end', () => {
			let posts = JSON.parse(postsStr);

			// Add the date property to the data
			posts.forEach(function (post) {
				post['date'] = Date.now();
			})

			//To resolve an error
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

			res.json(posts);
		});

	}).on("error", (err) => {
		res.json("Error: " + err.message);
	});
});


//Listen on the port 3000
app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})