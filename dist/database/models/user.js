"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = require("validator");
const bcrypt_1 = require("bcrypt");
// Define the user schema
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [validator_1.isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Minimum password length is 8 characters"],
    },
});
// Middleware to hash the password before saving
userSchema.pre("save", async function (next) {
    const salt = await (0, bcrypt_1.genSalt)(10);
    this.password = await (0, bcrypt_1.hash)(this.password, salt);
    next();
});
// Static method to authenticate user by email and password
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const isAuth = await (0, bcrypt_1.compare)(password, user.password);
        if (isAuth) {
            return user;
        }
        throw new Error("Incorrect password");
    }
    throw new Error("Incorrect email");
};
// Create and export the User model based on the schema
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map