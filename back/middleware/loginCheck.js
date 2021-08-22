const { check } = require('express-validator')
const User = require('../models/user')

exports.loginCheck = async (req, res, next) => {
  check('username').not().isEmpty().withMessage('Vous devez remplir votre nom de joueur').isLength({ min: 3 }).trim().withMessage('Ton nom de joueur doit avoir au minimum 3 caractères'),
  
  check('email').not().isEmpty().withMessage('Tu dois rentrer un email').isEmail().withMessage('Ton adresse email n\'est pas valide')
  // Check if email is already in the Database
  .custom((value, {req}) => {
    return new Promise((resolve, reject) => {
      User.findOne({email:req.body.email}, function(err, user){
        if(err) {
          reject(new Error('Server Error'))
        }
        if(Boolean(user)) {
          reject(new Error('Cet email est déjà utilisé'))
        }
        resolve(true)
      });
    });
  }),

  check('password').not().isEmpty().withMessage('Vous devez choisir un mot de passe').isLength({ min: 8 }).trim().withMessage('Ton nom de joueur doit avoir au minimum 8 caractères').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Ton mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre')

  next()
}