const jwt = require('jsonwebtoken');
const User = require ('../models/user');

exports.userInfos = async (req, res) => {
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
}