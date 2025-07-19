const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/gethello', (req, res) => {
    res.send('Hello NodeJS!!');
});

app.listen(8000, () => {
    console.log("server start at port no. 8000");
});
