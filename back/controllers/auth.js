const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');

// signup
exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })

    const result = await user.save()
    const {password, ...data} = await result.toJSON()

    res.send(data)
  }

// check email
exports.checkEmail = async (req, res) => {
  console.log(req.body.email);
  const user = await User.findOne({email: req.body.email})
  if(user) {
    return res.status(200).send('Cette adresse mail est déjà utilisée')
  }

  return res.send('ok')
}

// login
exports.login = async (req, res) => {
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
}

// check bot first login
exports.checkBot = async (req, res) => {
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

    res.send(data);
  } 
  catch (err) {
    return res.status(401).send({
      message: 'unauthenticated error'
    })
  }
}

// logout
exports.logout = async (req, res) => {
  res.cookie('jwt', '',{maxAge: 0})

  res.send({
    message: 'success'
  })
}
