const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
