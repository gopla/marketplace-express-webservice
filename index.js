const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const router = require("./config/routes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It works");
});
app.use(router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(process.env.PORT || 3000, function() {
  console.log(" -> Server listening on port 3000");
});
