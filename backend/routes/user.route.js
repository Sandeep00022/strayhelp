import express from "express";
import { signout } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/sign-out", signout);

export default router;