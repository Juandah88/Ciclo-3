 var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/DBLibreria', 
                  {connectTimeoutMS: 5000
                     , serverSelectionTimeoutMS: 5000
                  })
            .then(bd => console.log('Base de datos connectada'))
            .catch(error => console.error('Error al conectarse con la base de datos: ' + error));