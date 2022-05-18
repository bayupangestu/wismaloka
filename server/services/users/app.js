const express = require("express");
const app = express();
const cors = require("cors");

const index = require("./routes/index");
const errHandle = require("./middlewares/errHandler");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/", index);

app.use(errHandle);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
