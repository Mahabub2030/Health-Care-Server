import express from "express";

import { AdminRoutes } from "../modules/admin/admin.routes";
import { AppointmentRoutes } from "../modules/appointment/appointment.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { DoctorRoutes } from "../modules/doctor/doctor.routes";
import { doctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.routes";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes";
import { SpecialtiesRoutes } from "../modules/specialties/specialties.routes";
import { userRoutes } from "../modules/user/user.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/schedule",
    route: ScheduleRoutes,
  },
  {
    path: "/doctor-schedule",
    route: doctorScheduleRoutes,
  },
  {
    path: "/specialties",
    route: SpecialtiesRoutes,
  },
  {
    path: "/doctor",
    route: DoctorRoutes,
  },
  {
    path: "/appointment",
    route: AppointmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
