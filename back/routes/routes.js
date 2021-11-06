const router = require ('express').Router()
const { check } = require('express-validator')
const User = require('../models/user')

const pointsShifumiController = require ('../controllers/pointsShifumi')
const pointsDesController = require ('../controllers/pointsDes')
const rankingController = require ('../controllers/ranking')
const authController = require ('../controllers/auth')
const userInfosController = require ('../controllers/userInfos')
const botController = require ('../controllers/bot.js')

// Middleware
const loginCheck = require ('../middleware/loginCheck')


// signup
router.post('/signup', 

// loginCheck.loginCheck
[
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
  check('password').not().isEmpty().withMessage('Vous devez choisir un mot de passe').isLength({ min: 8 }).trim().withMessage('Ton nom de joueur doit avoir au minimum 8 caractères').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage('Ton mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre'),
]
,authController.signup);

// checkmail
router.post('/checkemail', authController.checkEmail);
// login
router.post('/login', authController.login);
// first login
router.get('/botstatus', authController.checkBot);
// logout
router.post('/logout', authController.logout);


// select a bot
router.get('/bot1', botController.botSelection1);
router.get('/bot2', botController.botSelection2);
router.get('/bot3', botController.botSelection3);


// user infos
router.get('/user', userInfosController.userInfos);


// points shifumi level 1
router.get ('/wins1', pointsShifumiController.win1);
router.get ('/loses1', pointsShifumiController.lose1);
// points shifumi level 2
router.get ('/wins2', pointsShifumiController.win2);
router.get ('/loses2', pointsShifumiController.lose2);
// points shifumi level 3
router.get ('/wins3', pointsShifumiController.win3);
router.get ('/loses3', pointsShifumiController.lose3);


// points des level 1
router.get ('/wind1', pointsDesController.win1);
router.get ('/losed1', pointsDesController.lose1);
// points des level 2
router.get ('/wind2', pointsDesController.win2);
router.get ('/losed2', pointsDesController.lose2);
// points des level 3
router.get ('/wind3', pointsDesController.win3);
router.get ('/losed3', pointsDesController.lose3);


// ranking
router.get ('/ranking-global', rankingController.globalRanking);
router.get ('/ranking-shifumi', rankingController.shifumiRanking);
router.get ('/ranking-des', rankingController.desRanking);

// personnal ranking NOT WORKING YET !!!
router.get ('/ranking-user', rankingController.personnalRanking);

module.exports = router;