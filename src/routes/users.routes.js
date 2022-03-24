const router = require("express").Router();
const { renderSignUpForm, signUp, signIn, renderSignInForm, logout } = require("../controllers/users.controller");



router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", signUp);

router.get("/users/signin", renderSignInForm);

router.post("/users/signin", signIn);

router.get("/users/logout", logout);















module.exports = router;
