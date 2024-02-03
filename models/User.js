import { model, Schema, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
  password: { type: String, require: true },
  confirmPassword: { type: String, require: true },
},{timestamps:true});

const User = models.User || model("User", userSchema);

export default User;
