const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.post('/api', (req, res) => {
	console.log(req.body);
})

app.listen(port)
