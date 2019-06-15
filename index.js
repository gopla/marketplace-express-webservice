const express = require("express");
const app = express();

app.use(express.json());
app.use("/produk", require("./routes/produkRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/keranjang", require("./routes/keranjangRouter"));

app.listen(process.env.PORT || 3000, function() {
  console.log(" -> Server listening on port 3000");
});
