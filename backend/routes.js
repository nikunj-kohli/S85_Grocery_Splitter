const express = require('express');
const router = express.Router();
const User = require('./model/User');

router.post('/users', async(req, res)=> {
  try{
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  }
  catch(error){
    console.error("Cannot post your data", error);
    res.status(500).json({error: error.message});
  }
});


router.get('/users', async(req, res) => {
try{
    const users = await User.find();
  res.status(200).json(users);
}

catch(error){
  console.error("Cannot retrieve your data", error);
  res.status(500).json({error: error.message});
}
});

router.put('/users/:id', async(req, res) =>{
  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});
    if(!user){
      return res.status(400).json({message: "User Not Found"});
    }
    res.json(user);
  }
  catch(error){
    console.error("Cannot Update your data", error);
    res.status(500).json({error: error.message});
  }
});


router.delete('/users/:id', async(req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
      return res.status(400).json({message: "User Not found"});
    }
  }
  catch(error){
    console.error("Cannot Delete Your data", error);
    res.status(500).json({error: error.message});
  }
})

module.exports = router;