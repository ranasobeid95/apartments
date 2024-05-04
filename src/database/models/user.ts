import { Schema, model, Document, Model } from "mongoose";
import { isEmail } from "validator";
import { genSalt, hash, compare } from "bcrypt";

// Define the interface for the User document
interface IUser extends Document {
  email: string;
  password: string;
}

// Define the static methods interface for the User model
interface IUserModel extends Model<IUser> {
  login(email: string, password: string): Promise<IUser>;
}

// Define the user schema
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [8, "Minimum password length is 8 characters"],
  },
});

// Middleware to hash the password before saving
userSchema.pre<IUser>("save", async function (next) {
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

// Static method to authenticate user by email and password
userSchema.statics.login = async function (
  email: string,
  password: string
): Promise<IUser> {
  const user = await this.findOne({ email });
  if (user) {
    const isAuth = await compare(password, user.password);
    if (isAuth) {
      return user;
    }
    throw new Error("Incorrect password");
  }
  throw new Error("Incorrect email");
};

// Create and export the User model based on the schema
const User: IUserModel = model<IUser, IUserModel>("User", userSchema);

export default User;
