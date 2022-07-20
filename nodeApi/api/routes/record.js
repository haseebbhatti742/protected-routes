import express from "express";
const router = express.Router();
import {
  getUsers,
  addUser,
  deleteUser,
} from "../controllers/RecordController.js";
import { verifyToken } from "../middlewares/auth.js";

router.get("/", verifyToken, getUsers);
router.post("/", verifyToken, addUser);
router.delete("/:name", verifyToken, deleteUser);

export default router;
