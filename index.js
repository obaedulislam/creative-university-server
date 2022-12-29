const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4900;

//Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Academic Portal server running");
});

app.listen(port, () => {
  console.log(`Academic Portal server running on port: ${port}`);
});
