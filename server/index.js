const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res) => {
    res.status(200).send('Hello, World!');
});

//Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
