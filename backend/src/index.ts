import express from 'express';
import axios from 'axios';
import configAxios from './config/config.axios';
// import cors from 'cors'
// import configCors from './config/config.cors';
import itemController from './controller/item';

const app = express();

console.log('Configurando axios')
axios.defaults.baseURL = configAxios.baseURL;
axios.defaults.timeout = configAxios.timeout;

//console.log('Configurando Seguridad')
// app.use(cors(configCors));

console.log('Configurando Agregando rutas')
app.use(itemController);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})