/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')

const app = express();

// Setting up a static directory for the files in /pub
// using Express middleware.
// Don't put anything in /pub that you don't want the public to have access to!
app.use(express.static(__dirname + '/pub'))

// Let's make a route for an HTTP GET request to the 
// 'root' of our app
app.get('/', (req, res) => {
	// sending a string
	//res.send('This should be the root route!')

	//sending some HTML
	res.send('index.html')
})

app.get('/example.html', (req, res) => {
	//sending some HTML to the client
	res.send('example.html')
})

app.get('/documentation.html', (req, res) => {
	//sending some HTML to the client
	res.send('documentation.html')
})

// will use an 'environmental variable', process.env.PORT, for deployment.
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})

