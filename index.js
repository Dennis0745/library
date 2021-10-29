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

app.use(express.urlencoded({extended: false, limit:"10mb"}))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const Router = require('./routes/index.js')
app.use('/', Router)

const authorRouter = require('./routes/authors.js')
app.use('/authors', authorRouter)

const bookRouter = require('./routes/books.js')
app.use('/books', bookRouter)

app.listen(process.env.PORT || 3000)