const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/myDatabase')
        console.log('Database Connected');
    }catch(error){
        console.error('Failed to connect to database');
    }

}

module.exports = connectDB;