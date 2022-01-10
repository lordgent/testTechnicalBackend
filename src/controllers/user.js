const { user } = require("../../models");
const Joi = require("joi");

exports.Register = (req, res) => {
  try {
    const schema = Joi.object({
      fullname: Joi.string().min(5).required(),
      email: Joi.string().min(5).email().required(),
      nophone: Joi.string().max(11).required(),
      password: Joi.string().min(8).required(),
    });
  } catch (error) {}
};
