const fs = require('fs');

const dataBase = './database/bible/json/pt_nvi.json'
const fuctions = {}

fuctions.getAllBooks = () => {
    return new Promise((resolve,rejects)=> {
        try {
            console.log('GET All Books - init')
            var db_Biblia
            try {
                db_Biblia = JSON.parse(fs.readFileSync(dataBase));
            } catch (error) {
                fuctions.db_SyntaxError(dataBase).then((result)=>{
                    resolve(result['books'])
                }).catch((error)=>{
                    console.error('Error of syntax, not corrigido: ', error)
                });
            }
            resolve(db_Biblia['books']);
            console.log("Biblia - get all livros = ", db_Biblia['books'].length)      
        } catch (err) {
            rejects(err);
        }
    })
    
}
fuctions.getAllChapter = (book)=>{
    return new Promise((resolve,rejects)=> {
        try {
            if(typeof(book) === 'string'){
                const db_Biblia = JSON.parse(fs.readFileSync(dataBase));
               resolve(db_Biblia['biblia'][`${book}`].chapters.length)
            }
        } catch (error) {
            rejects(error);
        }
    })
    
    
}

fuctions.getChapter = (book,chapter) => {
    return new Promise((resolve,rejects)=> {
        try {
            if(typeof(book) !== 'string'){
                rejects('o tipo do Parametro book nao é string ') 
            }else if(typeof(chapter) !== 'number' ) {
                rejects('o tipo do Parametro chapter nao é number ')
            }else{
                const db_Biblia = JSON.parse(fs.readFileSync(dataBase));

                resolve(db_Biblia['biblia'][`${book}`].chapters[chapter - 1])
            }
            
        } catch (error) {
            rejects(error);
        }
    })
    
}
// Fix Error
fuctions.db_SyntaxError = (dataBase) => {
    return new Promise((resolve,rejects)=> {
        try {
            console.log('Fix SyntaxError - init ')
            var db = fs.readFileSync(dataBase).toString().replace(/^\ufeff/g,"");
            var db_corrigido = JSON.parse(db);
            fs.writeFileSync(dataBase, JSON.stringify(db_corrigido, null, 2));
            console.log('Fix SyntaxError - finish ')
            resolve(db_corrigido);        
        } catch (error) {
            rejects(error)
        }
    })
    
}
// criate Collection
fuctions.setDataBaseOfBooks = () => {
    return new Promise((resolve,rejects) => {
        try {
            var data = fs.readFileSync(dataBase).toString().replace(/^\ufeff/g,"")
            var dataJSON = JSON.parse(data)
            var newDate = {}
            var books = []
            dataJSON.forEach(b => {
                newDate[`${b.name}`] = b 
                books.push({name: b.name, abbrev: b.abbrev})
            })
            var db = {biblia: newDate,books: books}
            fs.writeFileSync(dataBase, JSON.stringify(db, null, 2));
            resolve('Deu Certo')
        } catch (error) {
            rejects();
        }
    })
}


module.exports = fuctions;
