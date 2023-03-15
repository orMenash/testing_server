const e = require("express");

const indexR = require("./index_rout");
const orR = require("./or_rout");
const shayR = require("./shay_rout");
const benR = require("./ben_rout");
const meirR = require("./meir_rout");
const isrR = require("./isr_rout");

exports.routesInit = (app) => {
  app.use("/", indexR);
  app.use("/or", orR);
  app.use("/shay", shayR);
  app.use("/meir", meirR);
  app.use("/isr", isrR);
  app.use("/ben", benR);
};
