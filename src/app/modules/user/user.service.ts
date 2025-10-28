import { Request } from "express";
import { fileUploder } from "../../helpers/fileUpdate";

const createPatient = async (req: Request) => {
  if (req.file) {
    const uploadResult = await fileUploder.uploadTocloudinary(req.file);
    console.log({ uploadResult });
  }

  // const hashPassword = await bcrypt.hash(req.body.password, 10);

  // const result = await prisma.$transaction(async (tnx) => {
  //   await tnx.user.create({
  //     data: {
  //       email: req.body.email,
  //       password: hashPassword,
  //     },
  //   });

  //   return await tnx.patient.create({
  //     data: {
  //       name: req.body.name,
  //       email: req.body.email,
  //     },
  //   });
  // });
  // return result;
};

export const UserService = {
  createPatient,
};
