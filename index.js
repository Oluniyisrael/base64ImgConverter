const express = require('express');
const app = express();
const port = 5000;
const routes = require('../textToImage/back/routes');
app.use(express.json());
app.use('/', routes)
app.listen(port, ()=>{
    console.log(`Server is running on ${port} `)
})