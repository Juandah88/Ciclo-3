const express = require('express');
const router = express.Router();
const book = require('../model/book');

router.get('/Libros', async(request, response) => 
{
    try {
        let books = await book.find();
        response.send(books);
    } catch (error) {
        response.send('Error: ' + error);
    }
        
});

router.get('/Libros/Crear', (request, response) => {
    response.render('books/create');
})

module.exports= router;