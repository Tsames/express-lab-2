const express = require('express');
const app = express();
/*********************
Greetings Routes
**********************/

app.get('/greeting/', (req, res) => {
  res.send(`Hello, stranger. I\'m not sure, we've met before.`)
})

app.get('/greeting/:name', (req, res) => {
  res.send(`Its so nice to meet you ${req.params.name}!`)
})

/*********************
Tip Routes
**********************/

app.get('/tip/:amount/:tipPercentage', (req, res) => {
  const tip = Number(req.params.amount) * (Number(req.params.tipPercentage) / 100)
  res.send(`${tip}`)
})

app.listen(3000, () => {
})