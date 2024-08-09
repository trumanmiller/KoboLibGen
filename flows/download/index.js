const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const search = req.query.s;


});

module.exports = router;