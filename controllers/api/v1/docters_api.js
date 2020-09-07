const bcrypt = require("bcryptjs");
const Docter = require("../../../models/docters");
const jwt = require("jsonwebtoken");

//RENDER THE Register
module.exports.register = async function (req, res) {
  try {
    return res.render("register", { title: "Register" });
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};
module.exports.create = async function (req, res) {
  try {
    const { name, password, confirm_password } = req.body;

    //Find docter by name
    let docter = await Docter.findOne({ name: name });

    if (!docter) {
      //Hash Password
      let salt = bcrypt.genSaltSync(10);
      let hashPassword = bcrypt.hashSync(password, salt);
      //User Create with Hash Password
      docter = await Docter.create({ name: name, password: hashPassword });

      return res.json(200, {
        message: "Sign up successfully",
        docter: docter,
      });
      // return res.redirect("/api/v1/docters/login");
    }
    return res.json(422, {
      message: "password and confirm password are not same",
    });
    //return res.redirect("back");
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};
module.exports.login = function (req, res) {
  try {
    return res.render("login", { title: "Log In" });
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};
module.exports.create_session = async function (req, res) {
  try {
    const { name, password } = req.body;

    let docter = await Docter.findOne({ name: name });
    //Password is match
    const match = await bcrypt.compare(password, docter.password);

    if (!docter || !match) {
      return res.json(422, { message: "Invalid Username or password" });
    }

    return res.json(200, {
      message: "Sign in successful, here is your token, please keep it safe!",
      data: {
        token: jwt.sign(docter.toJSON(), "Hospital", { expiresIn: "1000000" }),
      },
    });
  } catch (err) {
    return res.json(422, { message: err });
    //return res.redirect("back");
  }
};
