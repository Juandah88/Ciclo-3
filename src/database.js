 var mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/DBLibreria', 
                  {  connectTimeoutMS: 3000
                     , serverSelectionTimeoutMS: 3000
                  })
            .then(bd => console.log('Base de datos connectada'))
            .catch(error => console.error('Error al conectarse con la base de datos: ' + error));