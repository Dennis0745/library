const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String
    },
    publicDate: {
        type: Date,
        required: true
    },
    pageCount:{
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required:true,
        default: Date.now
    },
    coverImageName: {
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

module.exports = mongoose.model("Books", bookSchema)