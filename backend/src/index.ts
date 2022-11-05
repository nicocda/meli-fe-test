import express from 'express';
import axios from 'axios';
import configAxios from './config/config.axios';
import cors from 'cors'
import configCors from './config/config.cors';
import itemController from './controller/item';
import { Log } from './services/logService';

const app = express();

Log('Configurando axios')
axios.defaults.baseURL = configAxios.baseURL;
axios.defaults.timeout = configAxios.timeout;

Log('Configurando Seguridad')
app.use(cors({}));

Log('Configurando Agregando rutas')
app.use(itemController);

const port = 3001;
app.listen(port, () => {
    Log(`The application is listening on port ${port}!`);
})