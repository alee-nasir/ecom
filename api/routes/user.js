const router = require("express").Router();
const { verifyToken } = require("./verifyToken");

route.put("/:id", verifyToken, (req, res) => {});

module.exports = router;
