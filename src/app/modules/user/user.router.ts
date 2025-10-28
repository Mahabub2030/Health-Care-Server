import express, { NextFunction, Request, Response } from "express";
import { fileUploder } from "../../helpers/fileUpdate";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/create-patient",
  fileUploder.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createPatientValidationSchema.parse(
      JSON.parse(req.body.data)
    );
    return UserController.createPatient(req, res, next);
  }
);
export const userRoutes = router;
