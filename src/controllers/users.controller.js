const userCTRL = {};
const User = require('../models/User');
const passport = require('passport');

userCTRL.renderSignUpForm = (req, res) => {
  res.render("users/signup");
};


// creates new user
userCTRL.signUp = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Passwords don't match" });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else{
    const emailUser = await User.findOne({email: email});
    if(emailUser){
      req.flash('error_msg', 'The email is already in use');
      res.redirect("/users/signup");
    }
    else{
      const newUser = new User({name, email, password});
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'User created successfully');
      res.redirect('/users/signin');
    }
  }
};

userCTRL.renderSignInForm = (req, res) => {
  res.render("users/signin");
};

userCTRL.signIn = passport.authenticate('passport_login', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true
})

userCTRL.logout = (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are Logged Out');
  res.redirect('/users/signin');
};

module.exports = userCTRL;
