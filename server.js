//Express.js palvelin
const path = require('path')
const express = require('express')

const app = express()

const tyontekijat = require('./tyontekijat.json')
//Tämä kohta ei toimi!!!!!---------------------------
//Etsitään kaikki tekijät jsonista
app.get('/api/tyontekijat',(reg, res) => {
    res.json(tyontekijat)
})
//Tehdään polku määritys public kansioon
const polku = path.join(__dirname, './public')

app.use(express.static(polku))

app.listen(3500, ()=>{
    console.log('server is up on port 3500')
})