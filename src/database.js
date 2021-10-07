 var mongoose = require('mongoose');
 const uriAtalas = 'mongodb+srv://admin:Admin123@clusterlibreria.1lv3v.mongodb.net/DbLibreria?retryWrites=true&w=majority;'
const uriLocal= 'mongodb://localhost/DBLibreria'

 mongoose.connect('uriAtalas', 
                  {  connectTimeoutMS: 3000
                     , serverSelectionTimeoutMS: 3000
                  })
            .then(bd => console.log('Base de datos connectada'))
            .catch(error => console.error('Error al conectarse con la base de datos: ' + error));