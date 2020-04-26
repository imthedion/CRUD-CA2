//installed packages
const express = require('express');                     //builds APIs, HTML, CSS, JavaScript
const bodyParser = require('body-parser');              //returns middleware that only parsers JSON
const http = require('http');                           //HTTP functions
const app = express();                                  //take care by Express
const mongoose = require('mongoose');                            

app.use(bodyParser.urlencoded({  extended: true  }));

 //uses the port 3000
app.listen(3000, function() {     
//prints out listening on 3000  
  console.log('listening on 3000')                      
});

//creates read-only variable
app.post('/quotes', (req, res) => {
    // CREATE

    const name = req.body.name;
    const position = req.body.position;

    // TODO: Insert to MongoDB
    // mongoDB.insert(name, position)
    res.send(players)
});

app.get('/players', (req, res) => {
    // READ
    // TODO: Query MongoDB for the list of players
    // mongoDB.getPlayers()

    //list of players
 const players = [
        'Lebron James',
        'Kobe Bryant',
        'Michael Jordan',
        'Stephen Curry',
        'Carmelo Anthony',
        'Damian Lillard'
    ]
    res.send(players)
});

app.put('/players/edit', (req, res) => {
    // UPDATE
    console.log('Edited')
});

app.delete('/players/delete', (req, res) => {
    // DELETE
    console.log('Deleted...')
});

//reads HTML file
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/indexx.html')
});

// mongoose.connect('mongodb+srv://user1:userpassword@cluster0-yflu3.mongodb.net/test?retryWrites=true&w=majority');
// mongoose.connection.on('error', (err) => { 
//     console.log('Mongodb Error: ', err); 
//     process.exit();
// });
// mongoose.connection.on('connected', () => { 
//     console.log('MongoDB is successfully connected');
// });