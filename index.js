const express = require('express')

const app = express()
const router = require('./src/routes/index.js');

const port = 3000;

//route
app.get('/', (req, res) => {
	res.send("Hello World!")
})

//define route
app.use('/api', router);

//start server
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
})
