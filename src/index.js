const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/rutas'));

app.use(express.static(path.join(__dirname + '/public')));

app.listen( port, () => {
    console.log(`Corriendo en el puerto: ${ port }`);
});
