const User = require("../Models/User");

const addUser = async (req, res) => {
  try {
    const temp = await User.find({ mobile: req.body.mobile });
    console.log(req.body);
    // console.log(temp.length);
    if (temp.length === 0) {
      const newUser = await User.create(req.body);
      console.log("his");
      console.log(req.body);
      res.status(201).json({ newUser });
    } else {
      res.status(200).send(" Record Already Present");
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  addUser,
};
