const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testMongo',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected')
    } catch (err) {
         console.log('Error connecting') 
    }
}

module.exports = {connect}