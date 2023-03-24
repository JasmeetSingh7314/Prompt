import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import ConnectDB from './mongodb/connect.js';

import postroutes from './routes/postroutes.js'
import dalleroutes from './routes/dalleroutes.js'

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/post',postroutes);
app.use('/api/v1/dalle',dalleroutes);

app.get('/',async(req,res)=>{
    res.send("Hello from DALL-E!")
})

const StartServer=async ()=>{
    try{
        ConnectDB(process.env.MONGODB_URL)
        app.listen(8080,()=>console.log("Server is started!"))


    }catch(err){
        console.log(err);

    }
    


}
StartServer();