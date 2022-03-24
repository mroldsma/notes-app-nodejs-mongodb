const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs');


const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// encrypts password stored in database
UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// compare the 2 passwords
UserSchema.methods.matchPassword = async function (password){
  return await bcrypt.compare(password, this.password);
}


module.exports = model('User', UserSchema);
