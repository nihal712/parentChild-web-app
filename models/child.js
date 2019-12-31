const mongoose = require("mongoose");

const ChildSchema = mongoose.Schema({
    parent_acno: Number,
    child_username: String,
    child_password: String,
    child_acno: Number,
    child_dob: String,
    balance: Number

});

const ChildModel = mongoose.model("Child", ChildSchema);

module.exports = ChildModel;