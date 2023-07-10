import dotenv from "dotenv";
import express from "express";
import bp from "body-parser";
import router from "./router";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  bp.urlencoded({
    extended: true,
  })
);
app.use(bp.json());
app.use(cors());
app.use(process.env.URL_PREFIX || "", router);
app.listen(process.env.PORT, () => {
  console.log("started");
});
