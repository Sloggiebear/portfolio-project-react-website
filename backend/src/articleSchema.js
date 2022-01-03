const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/reactwebsite', () => console.log("connected to database")).catch(error => handleError(error));

const articleSchema = new mongoose.Schema({
    name : String,
    upvotes : Number,
    comments : [{
        username : String,
        text: String
    }]
})

module.exports = mongoose.model("Article", articleSchema)