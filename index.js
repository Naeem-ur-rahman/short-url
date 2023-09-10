const express = require('express');

const urlRoute = require('./routes/url');
const indexRoute = require('./routes');
const { connectMongoDB } = require('./connect');

const app = express();
const PORT = 3001;

connectMongoDB('mongodb://127.0.0.1:27017/short-url')
     .then(() => console.log('Connected to MongoDB'));

app.use(express.json());
app.use('/url', urlRoute);
app.use('/', indexRoute);


app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`))