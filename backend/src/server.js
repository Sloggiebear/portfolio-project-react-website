const express = require('express')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const articles = require('./articleSchema.js')
const app = express();

// app.use(express.urlencoded({ extended: false})) // Important that this is defined before app.get
app.use(bodyParser.json())

app.get("/api/articles/:name", async (req, res) => {
    try {
        const articleName = req.params.name
        const article = await articles.find({name: articleName})
        res.status(200).json(article)
    } catch (error) {
        res.status(500).json({ message : "Error when connecting to database", error})
    }
})

app.post("/api/articles/:name/upvote", async (req, res) => {
    try {
        const articleName = req.params.name
        const article = await articles.find({name: articleName})
        await articles.findOneAndUpdate({name: articleName}, {
            $inc : {'upvotes' : 1}
        })
        res.status(200).json(article)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message : "Error when connecting to database", error})
    }
})

app.post("/api/articles/:name/addcomment", async (req, res) => {
    try {
        const comment = req.body
        const articleName = req.params.name
        await articles.findOneAndUpdate({name: articleName}, {
            $push : { 'comments' : comment}
        })
        const article = await articles.find({name: articleName})
        res.status(200).json(article)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message : "Error when connecting to database", error})
    }
})

app.listen(8000, () => console.log("Now listening on 8000"));