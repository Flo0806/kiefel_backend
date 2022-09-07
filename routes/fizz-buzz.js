const express = require("express");

const fizzBuzzController = require("../controller/fizz-buzz-controller");

const router = express.Router();

router.post("/", fizzBuzzController.analyzeInput);

module.exports = router;
