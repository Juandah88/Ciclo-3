const express = require('express');
const router = express.Router();


router.get('/', (request, response)=>{
     response.redirect('/libros')
    });

router.get('/inicio', (request, response)=>{
    response.render('home')
    });

module.exports = router;