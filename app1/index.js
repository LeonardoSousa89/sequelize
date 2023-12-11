//https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-postgresql/
const express = require("express");
const morgan = require("morgan");
const db = require("./db/db");
const { route } = require("./routes/route");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route)

app.listen(process.env.PORT || 3000, async () => {
  try {
    await db.sync();
  } catch (e) {
    console.log(e);
  }
});
