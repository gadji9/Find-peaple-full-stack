import { users } from "../../db";
import { NextFunction, Request, Response } from "express";

class UserController {
  async find(
    req: Request<{}, {}, { email: string; number: string }>,
    res: Response,
    next: NextFunction
  ) {
    if (!req.body) {
      next(new Error("Data was not provided"));
    }
    const { email, number } = req.body;
    if (!email) {
      return next(new Error("Data was not provided"));
    }
    const findedUsers = users.filter((user) => {
      if (email && number) {
        return user.email.startsWith(email) && user.number.startsWith(number);
      }

      if (email) {
        return user.email.startsWith(email);
      }

      if (number) {
        return user.number.startsWith(number);
      }
    });

    setTimeout(() => {
      res.status(200).send(findedUsers);
    }, 5000);
  }
}

export const userController = new UserController();
