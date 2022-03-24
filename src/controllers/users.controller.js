const userCTRL = {};

userCTRL.renderSignUpForm = (req, res)=>{
  res.render('users/signup');
};

userCTRL.signUp = (req,res)=>{
  res.send('sign up');
}

userCTRL.renderSignInForm = (req, res)=>{
  res.render('users/signin');
};

userCTRL.signIn = (req,res)=>{
  res.send('sign in ');
}

userCTRL.logout = (req, res)=>{
  res.send('logout  ');
};





module.exports = userCTRL;