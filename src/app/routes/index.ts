import express from "express";

import { authRoutes } from "../modules/auth/auth.routes";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes";
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
    path: "/schedule",
    route: ScheduleRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
