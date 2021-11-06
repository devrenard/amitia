const jwt = require('jsonwebtoken');
const User = require ('../models/user');

exports.botSelection1 = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, process.env.JWT_SECRET)

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    let user =  await User.find({_id: claims._id});

    const updatedUser = await User.findByIdAndUpdate(
      user[0]._id,
      { bot : 1 }, {
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
}

exports.botSelection2 = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, process.env.JWT_SECRET)

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    let user =  await User.find({_id: claims._id});

    const updatedUser = await User.findByIdAndUpdate(
      user[0]._id,
      { bot : 2 }, {
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
}

exports.botSelection3 = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, process.env.JWT_SECRET)

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    let user =  await User.find({_id: claims._id});

    const updatedUser = await User.findByIdAndUpdate(
      user[0]._id,
      { bot : 3 }, {
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
}