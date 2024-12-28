const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express();
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const cokieParser = require('cookie-parser')
const captainRoutes = require('./routes/captain.routes')

connectToDb()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cokieParser());

app.get('/', (req, res) =>{
  res.send("hello world")
})

app.use('/users', userRoutes)

app.use('/captain', captainRoutes);



app.use

module.exports = app; 
