// Index.js Servidor Express

const express = require('express');
const app = express();

// Configuracion basica

const PORT = 3000;

// Middleware para JSON

app.use(express.json());

// Raiz

app.get('/', (req, res) => {
    res.send('API funcionando ✅');
});

// Iniciar servidor

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
