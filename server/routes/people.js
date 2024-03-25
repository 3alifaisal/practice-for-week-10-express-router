const express = require('express');

const router = express.Router();
// /people
router.get("/", (req, res) => {
  res.json("Number 1");
});
// /people/:personId/likes
router.post("/:personId/likes", (req, res) => {
  res.json("Number 2");
})
// /people/:personId
router.delete("/:personId", (req, res) => {
  res.json("Number 3");
});
// /people/best-dressed/comments
router.get("/best-dressed/comments", (req, res) => {
  res.json("Number 4");
});
// /people/:name/lookup
router.get("/:name/lookup", (req, res) => {
  res.json("Number 5");
});

module.exports = router;