const express = require("express")
const router = express.Router();

const controller = require ("../controllers/task4Controller");

router.get("/", controller.show);

router.get("/:name", controller.showDetail)

module.exports = router;