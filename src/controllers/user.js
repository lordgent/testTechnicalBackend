const { user } = require("../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");

exports.Register = (req, res) => {
  const schema = Joi.object({
    fullname: Joi.string().min(5).required(),
    nophone: Joi.string().max(11).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(8).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });
  }
  try {
    const cekmail = await user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (cekmail) {
      return res.status(400).send({
        status: "bad requests",
        message: "email isAlready exist!",
      });
    }
    const { fullname, email, nophone, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const data = await user.create({
      fullname: fullname,
      email: email,
      nophone: nophone,
      password: hashed,
    });

    res.send({
      status: "success",
      message: "register is success",
      data: {
        fullname: data.fullname,
        email: data.email,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: "internal server error",
      message: "server error",
    });
  }
};
