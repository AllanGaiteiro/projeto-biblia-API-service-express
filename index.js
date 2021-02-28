//// native modules
    const express = require('express');
    const bodyParser =  require('body-parser')
    const handlebars = require('express-handlebars')
    const path = require('path')
    const app = express();
//// modules
    const router = require('./routes/router');
    var cors = require('cors');
//// config
    const PORT = 10000
    
    // bodyparser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    
    // handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    

    // Public
        app.use(express.static(__dirname + '/public'))// caminho absoluta para o 'public' 
        
        app.use(cors({origin: 'http://localhost:4200'}));
    // route
    app.use('/', router) 

//// conection
    app.listen(PORT, ()=> {
        console.log('Application [started]')
    })

    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

module.exports;