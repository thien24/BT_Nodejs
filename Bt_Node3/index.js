import express from "express";
import rootRouter from "./routes/root.mjs";
import userRouter from "./routes/user.mjs";
import { connectDB } from "./config/connectDB.mjs";
import bodyParser from "body-parser";
import methodOverride from "method-override";


connectDB();
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);
// parse application/json
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.use("/", rootRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server stated!!!");
});
