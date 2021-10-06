const mongoose  = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        titulo:{
            type: String,
            required: true,
            index: true
        }, 
        autor:{
            type: String,
            required: true,
            index: true
        },
        genero:{
            type:String,
            required: true,

        },       
        descripcion:{
            type: String,
            required: true,

        },
        // presentacion:{
        //     type: String,
        //     required: true,
        // }

    }
);

module.exports = mongoose.model('book',bookSchema);