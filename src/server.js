const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3333;

mongoose.connect('mongodb+srv://admin:admin@omnistack-nupjb.mongodb.net/semana09?retryWrites=true&w=majority',

{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); 
app.use(routes);

app.listen(PORT); 