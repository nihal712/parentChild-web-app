const ChildModel = require("../models/child");



module.exports = {
    childDetail: (req, res) => {

        let child_username = req.params.username;

        ChildModel.findOne({
            child_username
        }, (err, result) => {
            if (err) {
                res.status(500);
                res.send("error");
                return;
            }

            res.send(result)
            return;
        })

    },


    openChildAccount: async (req, res) => {

        let {
            parent_acno,
            child_username,
            child_password,
            child_acno,
            child_dob,
            balance
        } = req.body;
        child_password = await bcrypt.hash(password, 10);


        child = ChildModel({
            parent_acno,
            child_username,
            child_password,
            child_acno,
            child_dob,
            balance
        })


        child.save((err, result) => {
            if (err) {
                res.status("500");
                res.send();
                return;
            }
            res.status(200);
            res.send();
        })
    }
}