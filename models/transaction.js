const mongoose = require("mongoose");


const transactionSchema = mongoose.Schema({
    transaction_id: String,
    child_acno: Number,
    transaction_date: Date,
    transaction_desc: String,
    transaction_status: Boolean,
    transaction_amount: Number,
});

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;