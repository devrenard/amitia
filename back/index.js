const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb+srv://admin:amitiaadmin@amitia.chwsc.mongodb.net/amitia?retryWrites=true&w=majority' , { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false }, () => {
  console.log('connected to mongodb');
})

const routes = require ('./routes/routes')

app = express();

app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: ['http://localhost:4200']
}));

app.use(express.json());

app.use('/api', routes);

app.listen(8000, () => console.log('Connected to port 8000'));