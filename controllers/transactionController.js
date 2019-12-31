const transactionModel = require("../models/transaction");


module.exports = {
    transactDetail : (req, res) => {
        let child_acno = req.params.username;
        transactionModel.find({
            child_acno
        }, (err, result) => {
            if (err) {
                res.status(500);
                res.send("error");
                return;
            }

            res.send(result)
            return;
        })
    }
}