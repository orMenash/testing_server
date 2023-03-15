const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const { routesInit } = require("./routes/config_routs");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3001;

server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

routesInit(app);



app.get("/stream", (req, res) => {
  const path = "./mp3/a.mp3";
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