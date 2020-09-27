const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const db = require('./config/keys').MongoURI;

const book = require('./routes/books');

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true },() => console.log('connected to DB'));

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use('/api/books',book);






const port = process.env.PORT || 5000;
app.listen(port,() => `server running at ${port}`);

module.exports = app;