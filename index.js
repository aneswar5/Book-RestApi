const express=require('express');
const mongoose=require('mongoose');
const author=require('./router/authorbooks');

const url='mongodb://localhost/Authorbooks';

const app=express();

mongoose.connect(url,{useNewUrlParser:true});
const connect=mongoose.connection;

app.use(express.json());

app.use('/authorbooks',author);

app.listen(5007,()=>{
    console.log("Server was started 5007");
})