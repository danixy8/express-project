const express = require('express')
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Daniel',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    })
})

// app.get('/', (req, res) => {
// //   res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Daniel',
//         edad: 31,
//         url: req.url
//     };

//     res.send(salida);

// });

app.get('/data', (req, res) => {
    
    res.send('Hola Data')
    
    });
 
app.listen(3000, ()=>{
    console.log('Escuchando en el puerto 3000');
})