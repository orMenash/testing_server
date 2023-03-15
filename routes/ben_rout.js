const express = require("express");
const router = express.Router();
const fs = require("fs");



router.get("/", (req, res) => {
  res.json({ msg: "welcome ben" });
});

router.get("/stream", (req, res) => {
  const path = "../mp3/a.mp3";
  fs.stat(path, (err, stats) => {
    if(err){
      console.error("An error occurred!");
      res.sendStatus(500);
      return;
    }
    res.writeHead(200, {
      "Content-Length":stats.size,
      "Content-Type": "audio/mp3",
    });
    fs.createReadStream(path).pipe(res);
  })
});


module.exports = router;


