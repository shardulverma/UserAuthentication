const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');

// DataBase Connection
connectDB();

// Middleware to parse JSON
app.use(express.json());

// CORS
app.use(cors());

// Registration
app.post('/register', async (req,res)=>{
    try{
        const{username,password} = req.body;
        console.log(req.body);

        const user = new User({username,password});
        await user.save();
        res.status(200).send({message:'Registration Successful'})


    }catch(error){
        res.status(500).json({error:'Registration Failed'})
    }
});

// Login 
app.post('/login',async (req,res)=>{
    try{
        const{username,password} = req.body;
        const user = await User.findOne({username})
        if(!user){
            res.status(401).json({error:'Invalid Username or password'})
        }
        if(user.password !== password){
            res.status(401).json({error:'Invalid Username or password'})
        }
        res.status(200).json({message:'Login Successful'})
    }catch(error){
        res.status(500).json({error:'Login Failed'});
    }
});

app.listen(port,()=>{
    console.log(`Server Started, Listning on port ${port}`);
    
});