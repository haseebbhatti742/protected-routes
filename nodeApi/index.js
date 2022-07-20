import express from "express";
import cors from "cors";
import { config } from "dotenv";
const app = express();

app.use(cors());
app.use(express.json());
config();
const PORT = process.env.PORT || 8080;

import authRouter from "./api/routes/auth.js";
// import recordRouter from "./api/routes/record.js";
// import ssRouter from "./api/routes/ss.js";

app.use("/auth", authRouter);
// app.use("/record", recordRouter);
// app.use("/ss", ssRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
