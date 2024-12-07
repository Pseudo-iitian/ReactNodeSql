const express = require('express');
const { sequelize } = require('./models');
const app = express()
const PORT = 3001;

const db = require('./models');

db.sequelize.sync().then( ()=>{
    app.listen(PORT,()=>{
        console.log("server is running on port", PORT);
    });
})

