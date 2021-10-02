const { response } = require('express');
const express = require('express');
const router = express.Router();
const user = require('../model/user');


router.get('/usuarios/iniciosesion', (request, response) => {
    response.render('login', { layout: false });
})

router.get('/usuarios/registro', (request, response) => {

    
    response.render('users/create');
})

router.post('/usuarios/registro', async(request, response) => {
    const {email, fullName, password, password_confirm} = request.body;
    const errors = [];

    if(password != password_confirm){
        errors.push({text: 'Las contraseñas ingresadas no coinciden'});
    }
    if(password.length < 4){
        errors.push({text: 'La longitud mínima de la contraseña es 4'});
    }
    if(password.length > 8){
        errors.push({text: 'La longitud máxima de la contraseña es 8'});
    }

    //Se valida que el email no exista
    const emailUser = await user.findOne({ email: email });

 if (emailUser) {
      //request.flash("error_msg", "El correo electronica ya se encuentra reguistrado");
      response.redirect("/usuarios/registro");
    } else {
      // Saving a New User
      const newUser = new user({ fullName, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      //request.flash("success_msg", "Ya se encuentra registrado. favor inicie sesión");
      response.redirect("/usuarios/iniciosesion");
    }
    })

module.exports = router;