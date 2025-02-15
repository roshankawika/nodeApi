require('dotenv').config()

const express = require("express")
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.on('open',() => console.log('connected to database successfully'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers',subscribersRouter)

const authRouter = require('./routes/auth')
app.use('/subscribers/auth',authRouter)



app.listen(8080, () => console.log('server started rose !!!'))