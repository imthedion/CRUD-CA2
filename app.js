const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({  extended: true  }))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.post('/quotes', (req, res) => {
    // CREATE

    const name = req.body.name;
    const position = req.body.position;

    // TODO: Insert to MongoDB
    // mongoDB.insert(name, position)
    res.send(players)
})

app.delete('/players/delete', (req, res) => {
    console.log('Deleted...')
})

app.put('/players/edit', (req, res) => {
    console.log('Edited')
})

app.get('/players', (req, res) => {

 const players = [
        'Lebron James',
        'Kobe Bryant',
        'Michael Jordan',
        'Stephen Curry',
        'Carmelo Anthony',
        'Damian Lillard'
    ]
    res.send(players)
})

})