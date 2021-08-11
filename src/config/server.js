const express = require ('express');
const path = require ('path');
const dotenv = require ('dotenv');
const bcryptjs = require ('bcryptjs');
const session = require ('express-session');

const app = express ();

app.set('port', process.env.PORT || 3000);


// Gestor  de plantillas html-ejs
app.set('views engine', 'ejs');

//Rutas de las vistas
app.set('views', path.join(__dirname, '../app/views'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//env
dotenv.config({path: path.join(__dirname, '../env/.env')});

// public
app.use('/resources', express.static(path.join(__dirname, '../public')));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

module.exports = app;