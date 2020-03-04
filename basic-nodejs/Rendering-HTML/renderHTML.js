const express = require("express");

const app = express();

const path = require('path');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

const port = process.env.port || 3000
app.listen(port, () => console.log(`Listening ${port}...`));
