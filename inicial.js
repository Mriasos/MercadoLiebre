
    const express = require('express');
const inicial = express();

const path = require('path');
const publicPath = path.resolve('public');
inicial.use(express.static(publicPath));

const puerto = 1234;
inicial.listen(puerto, ()=> {
    console.log('iniciando')
});

inicial.get('/', (req, res)=>{
    res.sendFile(path.resolve('views/home.html'))
});
inicial.get('/registro', (req, res)=>{
    res.sendFile(path.resolve('views/register.html'))
});

inicial.get('/login', (req, res)=>{
    res.sendFile(path.resolve('views/login.html'))
});
