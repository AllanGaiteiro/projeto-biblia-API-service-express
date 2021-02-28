const express = require('express')
const router = express.Router()
const functions = require('../database/databiblia')

//// routes
router.get('/', (req, res) => {
    console.log("servidor rodando")
    res.send('Bem vindo(a) a API da Biblia - Criada com Express.')
})

router.post('/biblia', (req, res) => {
    const {version} = req.body;
    functions.getAllBooks(version).then((result)=>{
        res.send(result);    
    }).catch((err)=>{
        console.error('Error in read of file database: ', err);
    })
})

router.post('/biblia/livro', (req, res) => {
    const {version, name} = req.body;
    functions.getAllChapter(version, name).then((result)=>{
        res.json(result);    
    }).catch((err)=>{
        console.error('Error: ',err);
    });
})

router.post('/biblia/livro/capitulo', (req, res) => {
    const {version, name, chapterNumber} = req.body;
    functions.getChapter(version, name, parseInt(chapterNumber)).then((result)=>{
        res.json(result);    
    }).catch((err)=>{
        console.error('Error: ',err);
    });
})


//// export module
module.exports = router;