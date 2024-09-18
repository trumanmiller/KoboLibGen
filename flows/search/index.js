const express = require("express");
const router = express.Router();
const fp = require("fs/promises");

const { isValidSearch } = require("./searchValidator");
const { invalidSearchError } = require("./errors");

router.get("/", async (req, res, next) => {
  const search = req.query.s;

  if (!isValidSearch(search)) return next(invalidSearchError);

  const libgenHTML = await fetch(`https://libgen.is/fiction/?q=${search}&criteria=&language=&format=epub`);
  const searchHtml = (await fp.readFile("../../views/index.html")).toString();
});

module.exports = router;
