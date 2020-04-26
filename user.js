var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    name: String,
    team: String,
    position: String,
    age: Number 
    
});

module.exports = mongoose.model('User', userSchema);