const express = require('express')
const router = express.Router()
const functions = require('../database/databiblia')

//// routes
router.get('/', (req, res) => {
    console.log("servidor rodando")
    res.send('Bem vindo(a) a API da Biblia - Criada com Express.')
})

router.get('/biblia', (req, res) => {
    functions.getAllBooks().then((result)=>{
        res.send(result);    
    }).catch((err)=>{
        console.error('Error in read of file database: ', err);
    })
})

router.post('/biblia/livro', (req, res) => {
    functions.getAllChapter(req.body.name).then((result)=>{
        res.json(result);    
    }).catch((err)=>{
        console.error('Error: ',err);
    });
})

router.post('/biblia/livro/capitulo', (req, res) => {
    functions.getChapter(req.body.name, parseInt(req.body.cap)).then((result)=>{
        res.json(result);    
    }).catch((err)=>{
        console.error('Error: ',err);
    });
})


//// export module
module.exports = router;