import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect(`mongodb+srv://meangiti60:<your password>@cluster0.tu9t8.mongodb.net/tododb`)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => console.log(err));
}
