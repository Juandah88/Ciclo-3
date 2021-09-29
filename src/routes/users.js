const express = require('express');
const router = express.Router();

router.get('/usuarios/login', (request, response) => {
    response.render('login', {layout:false})    
})

module.exports = router;