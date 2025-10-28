import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
const login = catchAsync(async (req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User loggedin successfully!",
    data: {},
  });
});

export const AuthController = {
  login,
};
