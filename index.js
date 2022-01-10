require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 4005;
const app = express();
const router = require("./src/routes/index");
app.get("/", (req, res) => {
  res.send("Welcome my rest api");
});

app.use(express.json());
app.use("/restapi/v1/", router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
