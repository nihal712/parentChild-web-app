const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const bcrypt = require("bcrypt");

const ParentSchema = mongoose.Schema({
  parent_acno: Number,
  child_username: [
    {
      child_acno: Number
    }
  ],
  parent_password: String,
  parent_username: String,
  parent_fullname: String
});

const ParentModel = mongoose.model("Parent", ParentSchema);

async function ParentValidation(body) {
  const schema = joi.object({
    parent_password: joi
      .string()
      .pattern(
        new RegExp(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@&$^*#%])[a-zA-Z0-9!@&$^*#%]{8,}$/
        )
      )
      .required(),
    parent_fullname: joi
      .string()
      .min(3)
      .max(100)
      .required(),
    parent_acno: joi.number().required(),
    parent_username: joi
      .string()
      .min(3)
      .required()
  });

  let { parent_password, parent_fullname, parent_acno, parent_username } = body;
  parent_password = await bcrypt.hash(parent_password, 10);

  schema.validateAsync(body).then(res => {
    // console.log("err here");
    // console.log(res);
  });

  return {
    parent: (parent = ParentModel({
      parent_password,
      parent_fullname,
      parent_acno,
      parent_username
    }))
  };
}



module.exports = {
  ParentModel,
  ParentValidation
};
