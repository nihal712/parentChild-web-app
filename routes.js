const express = require("express");

const loginController = require("./controllers/loginController");
const parentController = require("./controllers/parentController");
const childController = require("./controllers/childController");
const transactionController = require("./controllers/transactionController");

const router = express.Router();


function initroutes(app) {
  router.get("/child", childController.childDetail);
  router.get("/parent", parentController.ParentDetail);
  router.post("/signup", parentController.signUp);
  router.post("/parentlogin", loginController.parentLogin);
  router.get("/transaction/:acno", transactionController.transactDetail);
  app.use(router);
}

module.exports = {
  initroutes
};