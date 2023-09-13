const express = require('express');
const path = require('path');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const { connectMongoDB } = require('./connect');

const app = express();
const PORT = 3001;

connectMongoDB('mongodb://127.0.0.1:27017/short-url')
     .then(() => console.log('Connected to MongoDB'));


app.set("view engine", 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', staticRoute);
app.use('/user', userRoute);
app.use('/url', urlRoute);


app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`))