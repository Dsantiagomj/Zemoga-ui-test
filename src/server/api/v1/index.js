const router = require("express").Router();

const candidates = require("./candidates/routes.js");

router.use("/candidates", candidates);

module.exports = router;
