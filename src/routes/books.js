const express = require('express');
const book = require('../model/book');
const router = express.Router();


router.get('/libros', async(request, response) => 
{
    try {
        let books = await book.find();
        response.send(books);
    } catch (error) {
        response.send('Error: ' + error);
    }
        
});

router.post('/libros/crear', function(request, response){
    const data =  new book({
        titulo: request.body.titulo,
        autor: request.body.autor,
        descripcion: request.body.descripcion,
        presentacion: request.body.presentacion
    });

    try

    
});

module.exports= router;