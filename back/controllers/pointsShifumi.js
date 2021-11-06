const jwt = require('jsonwebtoken');
const User = require ('../models/user');
require('dotenv').config();

// SHIFUMI
// Shifumi Win Level 1 : add 3 points
exports.win1 = async (req, res) => {
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
      { pointsShifumi : user[0].pointsShifumi + 3 }, {
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

// Shifumi Lose Level 1 : substract 1 point
exports.lose1 = async (req, res) => {
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
      { pointsShifumi : user[0].pointsShifumi - 1 }, {
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

// Shifumi Win Level 2 : add 5 points
exports.win2 = async (req, res) => {
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
      { pointsShifumi : user[0].pointsShifumi + 5 }, {
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

// Shifumi Lose Level 2 : substract 3 points
exports.lose2 = async (req, res) => {
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
      { pointsShifumi : user[0].pointsShifumi - 3 }, {
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

// Shifumi Win Level 3 : add 10 points
exports.win3 = async (req, res) => {
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
      { pointsShifumi : user[0].pointsShifumi + 10 }, {
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

// Shifumi Lose Level 3 : substract 5 points
exports.lose3 = async (req, res) => {
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
      { pointsShifumi : user[0].pointsShifumi - 5 }, {
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