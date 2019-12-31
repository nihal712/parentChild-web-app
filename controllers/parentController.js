const {
    ParentModel,
    ParentValidation
} = require("../models/parent")





module.exports = {

    signUp: async (req, res) => {

        let {
            parent,

        } = await ParentValidation(req.body)

        console.log(parent);
        parent.save((err, result) => {
            if (err) {
                res.status("500");
                res.send();
                return;
            }
            res.status(200);
            res.send(result);
            return;
        })
    },

    ParentDetail: (req, res) => {

        let parent_username = req.params.username;

        ParentModel.findOne({
            parent_username
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