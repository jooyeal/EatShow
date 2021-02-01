const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", api);

const port = 8000;

app.listen(port, () => console.log(`Backend Listening on port ${port}`));
