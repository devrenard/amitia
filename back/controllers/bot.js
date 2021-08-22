const jwt = require('jsonwebtoken');
const User = require ('../models/user');

exports.botSelection = async (req, res) => {
  try{
    const cookie = req.cookies['jwt']
    const claims = jwt.verify(cookie, 'secret_amitia')

    if (!claims) {
      return res.status(401).send({
        message: 'unauthenticated'
      })
    }

    let user =  await User.find({_id: claims._id});

    // TROUVER SOLUTION
    const updatedUser = await User.findByIdAndUpdate(
      user[0]._id,
      user[0].bot = req.body
      ,{
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