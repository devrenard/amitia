const router = require ('express').Router();
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const pointsShifumiController = require ('../controllers/pointsShifumi')
const pointsDesController = require ('../controllers/pointsDes')
const rankingController = require ('../controllers/ranking')

router.post('/signup', async (req, res) => {
  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword
  })

  const result = await user.save()
  const {password, ...data} = await result.toJSON()

  res.send(data)

})

router.post('/login', async (req, res) => {
  const user = await User.findOne({email: req.body.email})

  if(!user) {
    return res.status(404).send({
      message: 'user not found'
    })
  }

  if(!await bcrypt.compare(req.body.password, user.password)) {
    return res.status(404).send({
      message: 'password is false'
    })
  }

  const token = jwt.sign({_id: user._id}, 'secret_amitia')

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  })
  res.send({
    message: 'success'
  })
})

router.get('/user', async (req, res) => {
  try{
    const cookie = req.cookies['jwt']

    const claims = jwt.verify(cookie, 'secret_amitia')

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    const user =  await User.findOne({_id: claims._id});

    const {password, ...data} = await user.toJSON();

    res.send(data)
  } 
  catch (err) {
    return res.status(401).send({
      message: 'unauthenticated'
    })
  }
})

router.post('/logout', (req, res) => {
  res.cookie('jwt', '',{maxAge: 0})

  res.send({
    message: 'success'
  })
})

// Points
router.get('/points', async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, 'secret_amitia')

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    let user =  await User.find({_id: claims._id});
 
    const updatedUser = await User.findByIdAndUpdate(
      user[0]._id,
      { pointsShifumi : user[0].pointsShifumi + 4 }, {
      new: true,
      runValidators: true
    })

    user =  await updatedUser;
    
    const {password, ...data} = await user.toJSON();
    

    res.send(data)
  } 
  catch (err) {
    return res.status(401).send({
      message: 'unauthenticated err'
    })
  }
})

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
router.get ('/ranking', rankingController.globalRanking);
router.get ('/ranking-shifumi', rankingController.shifumiRanking);
router.get ('/ranking-des', rankingController.desRanking);

// personnal ranking
router.get ('/ranking', rankingController.personnalRanking);

module.exports = router;