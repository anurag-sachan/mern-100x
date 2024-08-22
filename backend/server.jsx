const express = require('express')
const fs = require('fs')
const path = require('path')
const app=express()
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) =>{
    fs.readFile(path.join(__dirname,'courses.json'),'utf8',(err,data)=>{
        if(err) return res.status(500);
        return res.status(200).json(JSON.parse(data));
    })
})

app.listen(3001);
