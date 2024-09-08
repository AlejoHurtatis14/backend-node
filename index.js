const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { sequelize } = require('./config/database');

const setDataInit = require('./dataset/init');

const app = express();
app.use(cors());
app.use(express.json());

// Iniciamos rutas
const initRoutes = require('./routes/initRoutes');
initRoutes(app);

// Iniciar servidor
const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => { // Sincronizamos los modelos de la base de datos
    
    setDataInit(); // Agregamos los datos para iniciar, como usuario admin y roles

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}).catch((error) => {
    console.error('Connection fail', error);
})
