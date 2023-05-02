const express = require('express');
const app = express()
const port = 5000;
const cors = require('cors')
app.use(cors())

const chefData = require('./data/chefData.json');

app.get('/', (req, res)=>{
    res.send('server side running here at 5000')
});

app.get('/chef', (req, res)=>{
    res.send(chefData)
});

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    const selectedChef = chefData.find(chef => chef.id == id)
    res.send(selectedChef)
})

app.listen(port, ()=>{
    console.log('server running at', port);
});