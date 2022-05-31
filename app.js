require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Team 5',
        titulo: 'Buquealtoque'
    });
});


app.get('/paquetes', (req, res) => {
    res.render('paquetes', {
        nombre: 'Team 5',
        titulo: 'Buquealtoque'
    });
});



app.get('*', (req, res) => {
    res.send('404 | Page no found');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

