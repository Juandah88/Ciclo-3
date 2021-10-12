const express = require('express');
const router = express.Router();

router.get('/', (request, response)=>{
    response.render('home', {layout:'landing'})
    });

module.exports = router;