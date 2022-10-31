import express from 'express';
import axios from 'axios';
import config from './config/config.axios';
import { exposeItemEndpoints } from './controller/item';
const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})

axios.defaults.baseURL = config.axios.baseURL;
axios.defaults.timeout = config.axios.timeout;
axios.defaults.headers.post['Content-Type'] = config.axios.contentType;

//exposeItemEndpoints(app);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})