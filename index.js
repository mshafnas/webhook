const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/status', (req, res) => {
    res.send('server is running');
});


app.post('/webhook', (req, res) => {
    console.log(req.body);
    res.send('success');
});

app.listen(5000, () => {
    console.log('server is started');
});