const express = require('express');
const router = express.Router();

router.get('/Libros', (request, response) => {

})

router.get('/Libros/Crear', (request, response) => {
    response.render('books/create');
})

module.exports= router;