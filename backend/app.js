const express = require('express');
const app = express();
const mongoose = require('mongoose')
const password = 'dN9OPxe20fl2icms'
const dbname = 'CAR'
const uri = `mongodb+srv://kc:${password}@cluster0.sck53.mongodb.net/${dbname}?retryWrites=true&w=majority`


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then(()=>{
        console.log("Database connected")
    })
    .catch(()=>
        console.log("Error")
    )


module.exports = app