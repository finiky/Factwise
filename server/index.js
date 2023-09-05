const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./celebrities.json");
const port = 5000;
//middlewares
app.use(cors());
app.use(express.json());
//get route for getting celebrities
app.get("/celebrities", (request, response) => {
  response.status(200).json(data);
});

app.listen(port, () => {
  console.log("server started on port: " + port);
});
