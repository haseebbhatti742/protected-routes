import jwt from "jsonwebtoken";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../../db/db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

const login = (req, res) => {
  const { username, password } = req.body;
  const user = db.data.find(
    (item) => item.username == username && item.password == password
  );

  if (user) {
    const token = jwt.sign(
      { username: req.body.username },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    res.send({ status: "success", token: token, user: user });
  } else {
    res.send({ status: "failure", message: "Invalid Credentials" });
  }
};

const register = async (req, res) => {
  const { name, username, password } = req.body;
  const isUserRegistered = db.data.some((item) => item.username === username);
  if (name === "" || username === "" || password === "") {
    res.send({ status: "failure", message: "Enter Valid Data" });
  } else {
    if (isUserRegistered) {
      res.send({ status: "failure", message: "User Already Registered" });
    } else {
      db.data.push(req.body);
      await db.write();
      res.send({ status: "success", message: "User Successfully Registered" });
    }
  }
};

export { login, register };
