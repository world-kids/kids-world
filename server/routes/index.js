const express = require("express");
const itemRoutes = require("./item.routes");
var cors = require('cors')

const users = require("../../database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/item", itemRoutes);
app.listen(PORT, () => {
  console.log("success connected",PORT);
});
