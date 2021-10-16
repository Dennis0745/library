if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.database, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Database Connected"))

const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const Router = require('./routes/index.js')
app.use('/', Router)

app.listen(process.env.port || 3000)