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
Tip Route
**********************/

app.get('/tip/:amount/:tipPercentage', (req, res) => {
  const tip = Number(req.params.amount) * (Number(req.params.tipPercentage) / 100)
  res.send(`${tip}`)
})

/*********************
Magic 8 Ball Route
**********************/

const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
  const random = Math.floor(Math.random() * eightBall.length - 1);
  res.send(`
  <h1>${req.params.question}</h1>
  <h2>${eightBall[random]}</h2>
  `)
})

/*********************
Bottles of Beer
**********************/

app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of Beer on the Wall</h1>
    <a href="./98">Take one down and pass it around!</a>
    `)
});

app.get('/:number', (req,res) => {
  if (req.params.number == 0) {
    res.send(`
    <h1>No more beer left!</h1>
    <a href="./">Start over!</a>
    `)
  } else {
    res.send(`
    <h1>${req.params.number} bottles of beer on the wall</h1>
    <a href = "./${req.params.number - 1}">Take one down and pass it around!</a>
    `)
  }
});

/*********************
Listen
**********************/

app.listen(3000, () => {
})