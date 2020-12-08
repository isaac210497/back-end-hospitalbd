const express = require ('express');
require('dotenv').config();
var cors = require('cors');

const {dbConnection} = require('./database/config');


// crear el servidor de express

const app = express ();

//configurar cors

app.use(cors());

//base de datos

dbConnection();

//rutas

app.get('/', (req, res)=> {
    res.json({
        ok:true,
        msg: 'Hola mundo'
    })
} );


app.listen (process.env.PORT, () => {
    console.log('servidor corriendo en puerto' + process.env.PORT);
});
