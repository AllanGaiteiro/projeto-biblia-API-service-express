const fs = require('fs');
/*
const livros = [
    "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes", "Rute", "I Samuel", "II Samuel", "I Reis", "II Reis", "I Crônicas", "II Crônicas", "Esdras", "Neemias", "Ester", "Jó", "Salmos", "Provérbios", "Eclesiastes", "Cântico dos Cânticos", "Isaías", "Jeremias", "Lamentações de Jeremias", "Ezequiel", "Daniel", "Oséias", "Joel", "Amós", "Obadias", "Jonas", "Miquéias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias", "Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "I Coríntios", "II Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "I Tessalonicenses", "II Tessalonicenses", "I Timóteo", "II Timóteo", "Tito", "Filemom", "Hebreus", "Tiago", "I Pedro", "II Pedro", "I João", "II João", "III João", "Judas", "Apocalipse",
]
*/
////// joel
const db_Biblia = fs.readFileSync('./database/bible/pt_nvi.json', 'utf8').split(0)
//var livro = 'Gênesis'
//var cap = 4 //'all'
const fuctions = {}

fuctions.getAllBooks = () => {
    const array_of_books = db_Biblia.map(b => {return b.abbrev});
    return {books: array_of_books};
}

fuctions.getAllChapter = (book)=>{
    const array_of_chapters = 
    db_Biblia.forEach(b => {
        if (b.abbrev === book) {
            return b.chapters.length;
        }
    });
}

fuctions.getChapter = (book,chapter) => {
    const array_of_verses = db_Biblia.filter(b => {
        if(b.abbrev === book && ((b.chapters.length + 1) >= chapter) && chapter > 0 ){
            return true;
        }else{
            return false;
        }} )
}
/*
const Biblia = (livro, cap ) => {

    var indexL = livros.indexOf(livro)
    var obj = {}

    /////// funcaa que criara os inputs de cada livro 
    if (cap == 'livros') {
        return livros;
    }

    if (indexL >= 0) {
        var init = data.match(livros[indexL].toLocaleUpperCase())
        var fim

        if ((livros.length - 1) == indexL) {
            obj[livro] = data.substring(init['index'])

            // teste
                //console.log(init + ' pos[' + init['index'] + '] ')
        } else {
            fim = data.match(livros[indexL + 1].toLocaleUpperCase())


            obj[livro] = data.substring(init['index'], fim['index'])

            //teste
                //console.log(init + ' pos[' + init['index'] + '] | ' + fim + ' pos[' + fim['index'] + ']')
        }
        ////// dividindo capitulos 

        obj[livro] = obj[livro].split('>>capitulo')
        if (cap == 'Cap') {
            ///// chamando os inputs dos capitulos
            var caps = []
            for (const i in obj[livro]) {
                caps.push(i)
            }
            return caps
        } else {
            ///// chamando o capitulo e seus versiculos
            obj[livro][cap] = obj[livro][cap].split(/\d+/);
            var capitulo = []
            for (const i in obj[livro][cap]) {
                capitulo.push(
                    {numero: i,
                    conteudo : obj[livro][cap][i]})
        }
        
        obj[livro][cap] = capitulo
            //console.log(obj[livro][cap])
        return obj[livro][cap]
    }

} else {
    console.log('ele nao é uma livro')
    }
}
*/
module.exports = fuctions;
