const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB');
});

app.use(express.json());
app.use(cors());
app.options('*', cors());
//Import Routes
const apiRoute = require('./routes/api');

// app.use('/api', apiRoute);
app.use('/', apiRoute);

  
//Server
app.listen(process.env.API_PORT, () => {
  console.log(`Example app listening at http://localhost:`+process.env.DB_CONNECTION);
});