const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const methodOverride =   require('method-override')

//Inicializaciones
const app = express();
require('./database');

//Middleware
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    // Se configura  para enviar delete, put, a travez de los forms
    app.use(methodOverride('_method')) ; 
//Settings
    //Se configura el puerto
    app.set('port', 8080);
    //Se configura el directorio de las vistas
    app.set('views', path.join(__dirname, 'views'));
    // Se configra View engine
    app.engine('.hbs', expressHbs(
        {
        defaultLayout:'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir:path.join(app.get('views'), 'partials'),
        extname:'.hbs'

    }));

    app.set('view engine', '.hbs');

//Routes
    //Se configura las rutas para la navegación
    app.use(require('./routes/index.js'))
    app.use(require('./routes/books.js'))


//Static files  
//Se establece la configuración donde van a estar los archivos estaticos
app.use(express.static(path.join(__dirname, 'resources')));

//Server listenning
app.listen(app.get('port'), ()=> {console.log(app.get('port'));});
