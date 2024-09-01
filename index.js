const express = require('express');
const cors = require('cors');

const   app = express();
app.use(express.json());

// Utiliser CORS pour toutes les routes
app.use(cors());

app.use(express.static('react-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)}
);

app.get('/api/pirate/:id', (req, res) => {
    const id = req.params.id;
    const pirate = getPirate(id);
    if(!pirate) {
        res.status(404).send({ error: `Pirate ${id} not found` });
    } else {
        res.send({data: pirate});
    }
})

app.get('/api/pirates', (req, res) => {
    
   
    if(!pirates) {
        res.status(404).send({ error: `Pirate not found` });
    } else {
        res.send({data: pirates});
    }
})

const pirates =[
    {id: 1, name: 'Klaus Strotebeker', active: '1392-1401', country: 'Germany'},
    {id: 2, name: 'Jack OLantern', active: '1592-1601', country: 'Scotland'},
    {id: 3, name: 'Blackbeard', active: '1492-1501', country: 'England'},
    {id: 4, name: 'Brekpouart Sylvanios', active: '1692-1701', country: 'Switzerland'},
    {id: 5, name: 'Duke Pike', active: '1792-1801', country: 'USA'},
    {id: 6, name: 'Duke Caboom', active: '1892-1901', country: 'South Africa'},
    {id: 7, name: 'Jiosh Hiroko', active: '1992-2001', country: 'Japan'},
    {id: 8, name: 'Lui Kang', active: '2002-2021', country: 'China'}
];

function getPirate(id) {
    const pirate = pirates;
    
       return pirate.find(p => p.id == id);    
}

