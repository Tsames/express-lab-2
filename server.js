const express = require('express');
const app = express();

app.get('/greeting/', (req, res) => {
  res.send(`Hello, stranger. I\'m not sure, we've met before.`)
})

app.get('/greeting/:name', (req, res) => {
  res.send(`Its so nice to meet you ${req.params.name}!`)
})

app.listen(3000, () => {
})