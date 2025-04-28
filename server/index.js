const express = require('express');
const app = express();

app.use((req, res) => {
    res.status(200).send('Hello, World!');
});

//Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
