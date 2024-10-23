const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = require('./router/router');
const port = 3004;
const db = require('./config/db')
app.use('/v1',router)

app.listen(port , (err) =>{
    if(!err){
        console.log(`server is running on http://localhost:${port}/v1`);
    }
})
