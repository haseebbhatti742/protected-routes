import express from "express";
const router = express.Router();
import {
  getSS,
  getSSOnContract,
  getSSWithDepartment,
  getSSWithSubDepartment,
} from "../controllers/SSControler.js";
import { verifyToken } from "../middlewares/auth.js";

router.get("/", verifyToken, getSS);
router.get("/on-contract", verifyToken, getSSOnContract);
router.get("/with-department", verifyToken, getSSWithDepartment);
router.get("/with-sub-department", verifyToken, getSSWithSubDepartment);

export default router;
