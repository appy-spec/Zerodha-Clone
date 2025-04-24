const Joi = require("joi");

const userSchema = Joi.object({

  fullname: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
 
}).required();

module.exports=userSchema;
