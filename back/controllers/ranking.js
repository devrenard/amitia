const jwt = require('jsonwebtoken');
const User = require ('../models/user');


// Global Ranking : Top 10
exports.globalRanking = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, 'secret_amitia')

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    const usersRanking = await User.aggregate([
      {"$addFields":{ "sort_order":{"$add":["$pointsShifumi", "$pointsDes"]}}},
      {"$sort":{"sort_order":-1}}
    ]).limit(10)
    console.log(usersRanking);
 
    // const data = await usersShifumi[0].toJSON();

    res.send(usersRanking);
  } 
  catch (err) {
    return res.status(401).send({
      message: 'unauthenticated err'
    })
  }
}

// Shifumi Ranking : Top 10
exports.shifumiRanking = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, 'secret_amitia')

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    const usersShifumi = await User.find().sort( { pointsShifumi : -1 } ).limit(10)
    console.log(usersShifumi);
 
    const data = await usersShifumi[0].toJSON();

    res.send(data)
  } 
  catch (err) {
    return res.status(401).send({
      message: 'unauthenticated err'
    })
  }
}

// Des Ranking : Top 10
exports.desRanking = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, 'secret_amitia')

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    let user =  await User.find({_id: claims._id});

    const usersDes = await User.find().sort( { pointsDes : -1 } ).limit(10)
    console.log(usersDes);
 
    const data = await usersDes[0].toJSON();

    res.send(data)
  } 
  catch (err) {
    return res.status(401).send({
      message: 'unauthenticated err'
    })
  }
}

// Personnal Ranking
exports.personnalRanking = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, 'secret_amitia')

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    const usersRanking = await User.aggregate([
      {"$addFields":{ "sort_order":{"$add":["$pointsShifumi", "$pointsDes"]}}},
      {"$sort":{"sort_order":-1}}
    ]).limit(10)
    console.log(usersRanking);
 
    // const data = await usersShifumi[0].toJSON();

    res.send(usersRanking);
  } 
  catch (err) {
    return res.status(401).send({
      message: 'unauthenticated err'
    })
  }
}