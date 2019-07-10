const router = require("express").Router();
let User = require("../models/userModel");
const {check, validationResult} = require('express-validator');
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
});

  router.route("/add").post([
    check('username').isLength({min:3}),
    check('email').isEmail(),
    check('password').isLength({min:5}),
    check('name').isLength({min:5}),
  ],(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors:errors.array()});
  }
  console.log(errors);
  const username = req.body.username;
  const age = req.body.age;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const image = req.body.image;


  const newUser = new User({
    username,
    password,
    name,
    age,
    email,
    image
  });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error:" + err));
});





module.exports = router;
