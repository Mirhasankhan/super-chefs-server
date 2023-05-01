const express = require('express');
const app = express()
const port = 5000;
const cors = require('cors')
app.use(cors())

const chefData = require('./data/chefData.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res)=>{
    res.send('server side running here at 5000')
});

app.get('/chef', (req, res)=>{
    res.send(chefData)
})

app.get('/recipes', (req, res)=>{
    res.send(recipes)
})

app.listen(port, ()=>{
    console.log('server running at', port);
});