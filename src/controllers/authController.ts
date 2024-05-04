import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import User from "../database/models/user"; // Import User model and IUser interface
import { errorHandle } from "./errorHandle";

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds

const createToken = (id: string) => {
  return sign({ id }, process.env.SECRET!, { expiresIn: maxAge });
};

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { _id } = await User.create({ email, password });
    const token = createToken(_id);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // Convert maxAge to milliseconds
    });
    res.status(201).json({ status: 201, data: { userId: _id } });
  } catch (error: any) {
    const errors = errorHandle(error);
    res.status(400).json(errors);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { _id } = await User.login(email, password);
    const token = createToken(_id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.json({ status: 200, data: { userId: _id } });
  } catch (error: any) {
    const errors = errorHandle(error);
    res.status(400).json({ errors });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("jwt");
  res.json({ statusCode: 200, message: "Logout successfully" });
};
