const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://backend:5000/process', req.body);
        res.send(`<h3>Response from Backend:</h3><pre>${JSON.stringify(response.data)}</pre>`);
    } catch (error) {
        res.status(500).send('Error communicating with backend');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running at http://localhost:${PORT}`);
});
