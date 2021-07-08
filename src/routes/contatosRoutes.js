const express = require("express");
const { connect } = require(".");
const router = express.Router();
const controller = require("../controllers/contatosControllers");


router.get("/", controller.getAll);
router.get("/nome", controller.getByName);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.createContacts);
router.delete("/:id", controller.deleteContacts);
module.exports = router