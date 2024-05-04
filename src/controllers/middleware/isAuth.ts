import { Request, Response, NextFunction } from "express";
import { verify, VerifyErrors } from "jsonwebtoken";

const protectedRoute = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.cookies) {
    try {
      const { jwt } = req.cookies;

      const payload = (await verify(jwt, process.env.SECRET as string)) as {
        [key: string]: any;
      };
      req.user = payload;
      next();
    } catch (error) {
      const err = error as VerifyErrors;
      res.status(401).json({ status: 401, message: "Unauthorized" });
    }
  } else {
    res.status(401).json({ statusCode: 401, message: "Sign-in first" });
  }
};

export { protectedRoute };
