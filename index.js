require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./db/client");
const usersRouter = require("./routers/usersRouter");
const productsRouter = require("./routers/productsRouter");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await client.connect();
    app.use("/users", usersRouter);
    app.use("/products", productsRouter);
  } catch (err) {
    console.log("There was some error", err);
  } finally {
    app.get("/", (req, res) => {
      res.send("Mobile Reseller Server, Yeh!");
    });
    app.listen(port, () => {
      console.log("server is running on", port);
    });
  }
})();
