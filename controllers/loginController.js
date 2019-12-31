const { ParentModel } = require("../models/parent")
const ChildModel = require("../models/child")
const bcrypt = require('bcrypt');


module.exports = {

    linkAccount: (req, res) => {
        let {
            child_acno,
            parent_acno
        } = req.body;
        ChildModel.findOne({
            child_acno
        }, async (err, result) => {
            if (err) {
                res.status(500);
                res.send();
                return;
            }
            if (!result) {
                res.status(404);

                res.send('Not Found');
                return;
            }
            // console.log(result)


            if (result.parent_acno == parent_acno) {
                res.status(200);
                res.send(result);
            } else {
                res.status(401);
                res.send({
                    "error": "unauthorized"
                });
                return;
            }
        })
    },


    parentLogin: (req, res) => {
        let {
            parent_username,
            parent_password
        } = req.body;
        ParentModel.findOne({
            parent_username
        }, async (err, result) => {
            if (err) {
                res.status(500);
                res.send();
                return;
            }
            if (!result) {
                res.status(404);

                res.send('Not Found');
                // redirect to signup page
                return;
            }
            // console.log(result)
            const match = await bcrypt.compare(parent_password, result.parent_password)

            if (match) {
                res.status(200);
                res.send(result);
            } else {
                res.status(401);
                res.send({
                    "error": "unauthorized"
                });
                return;
            }

        })
    },

    childLogin: (res, req) => {
        let {
            child_username,
            child_password
        } = req.body;
        ChildModel.findOne({
            child_username
        }, async (err, result) => {
            if (err) {
                res.status(500);
                res.send();
                return;
            }
            if (!result) {
                res.status(404);

                res.send('Not Found');
                return;
            }
            // console.log(result)
            const match = await bcrypt.compare(child_password, result.child_password)

            if (match) {
                res.status(200);
                res.send(result);
            } else {
                res.status(401);
                res.send({
                    "error": "unauthorized"
                });
                return;
            }
        })
    }
}