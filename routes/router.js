const express = require('express')
const router = express.Router()
const Biblia = require('../database/databiblia')

//// routes
router.get('/', (req, res) => {
    console.log("servidor rodando")
    res.send('servidor rodando')
})

router.get('/biblia', (req, res) => {
    var livros = Biblia('livros', 'livros')
    console.log(livros)
    res.json(livros)
})

router.post('/biblia/livro', (req, res) => {
    var cap = Biblia(req.body.name, 'Cap')
    res.json(cap)
})

router.post('/biblia/livro/capitulo', (req, res) => {
    console.log(req)
    var vers = Biblia(req.body.name, req.body.cap)
    res.json(vers)
})


//// export module
module.exports = router;