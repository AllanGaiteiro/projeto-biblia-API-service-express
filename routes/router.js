const express = require('express')
const router = express.Router()
const functions = require('../database/databiblia')

//// routes
router.get('/', (req, res) => {
    console.log("servidor rodando")
    res.send('servidor rodando')
})

router.get('/biblia', (req, res) => {
    var livros = functions.getAllBooks()
    console.log(livros)
    res.json(livros)
})

router.post('/biblia/livro', (req, res) => {
    var cap = functions.getAllChapter(req.body.name)
    res.json(cap)
})

router.post('/biblia/livro/capitulo', (req, res) => {
    console.log(req)
    var vers = functions.getChapter(req.body.name, req.body.cap)
    res.json(vers)
})


//// export module
module.exports = router;