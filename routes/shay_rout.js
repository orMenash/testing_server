const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "welcome shay" });
});

module.exports = router;
