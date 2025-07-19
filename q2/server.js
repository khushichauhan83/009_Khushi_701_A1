const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(2000, () => {
    console.log("server start at port no. 2000");
});
