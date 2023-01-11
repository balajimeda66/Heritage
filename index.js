const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const CartRoute = require("./routes/Cart");
const OrderRoute = require("./routes/Order");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/testdb", {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connection is open");
  })
  .catch((err) => {
    console.log("mongo connection error");
    console.log(err);
  });

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/Cart", CartRoute);
app.use("/api/Orders", OrderRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("backend server is running");
});
