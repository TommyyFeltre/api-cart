import app from "./app";
import mongoose from "mongoose";

mongoose.set('debug', true);
mongoose.connect("mongodb://127.0.0.1:27017/its_2023_cart")
  .then(_ => {
    console.log("Connected to db");
    app.listen();
  })
  .catch((err) => {
    console.log(err);
  });
