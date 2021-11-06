const jwt = require('jsonwebtoken');
const User = require ('../models/user');
require('dotenv').config();


exports.userInfos = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']

    const claims = jwt.verify(cookie, process.env.JWT_SECRET)

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
}