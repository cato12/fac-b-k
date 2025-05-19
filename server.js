const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./users.db');

// Middleware para leer formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Crear tabla si no existe
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  password TEXT NOT NULL
)`);

// Ruta POST para el login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password], (err) => {
        if (err) {
            console.error(err);
            return res.send('Error al guardar los datos');
        }
        res.send('<h2>Datos recibidos. Gracias.</h2><a href="/">Volver</a>');
    });
});


// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
