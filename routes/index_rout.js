const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.json({msg: "try server on linux"});
})

module.exports = router;