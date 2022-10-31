import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.get('/asd', (req, res) => {
    res.send('Well done asd!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})