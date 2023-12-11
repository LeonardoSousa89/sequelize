const express = require("express");
const { insert, findAll, findById, alterUser, deleteUser } = require("../controller/controller");

const route = express.Router();

route.route("/create/user").post(async (req, res) => insert(req, res));

route.route("/get/all/users").get(async (req, res) => findAll(req, res));

route.route("/get/user/:id").get(async (req, res) => findById(req, res));

route.route("/update/user/:id").put(async (req, res) => alterUser(req, res));

route.route("/delete/user/:id").delete(async (req, res) => deleteUser(req, res));

module.exports = { route };
