const jwt = require('jsonwebtoken');
const User = require ('../models/user');

// DES
// Des Win Level 1 : add 3 points
exports.win1 = async (req, res) => {
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
      { pointsDes : user[0].pointsDes + 3 }, {
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

// Des Lose Level 1 : substract 1 point
exports.lose1 = async (req, res) => {
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
      { pointsDes : user[0].pointsDes - 1 }, {
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

// Des Win Level 2 : add 5 points
exports.win2 = async (req, res) => {
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
      { pointsDes : user[0].pointsDes + 5 }, {
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

// Des Lose Level 2 : substract 3 points
exports.lose2 = async (req, res) => {
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
      { pointsDes : user[0].pointsDes - 3 }, {
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

// Des Win Level 3 : add 10 points
exports.win3 = async (req, res) => {
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
      { pointsDes : user[0].pointsDes + 10 }, {
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

// Des Lose Level 3 : substract 5 points
exports.lose3 = async (req, res) => {
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
      { pointsDes : user[0].pointsDes - 5 }, {
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