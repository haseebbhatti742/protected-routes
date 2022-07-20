import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { appendFile } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../../db/db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

const getUsers = (req, res) => {
  res.send(db.data);
};

const addUser = async (req, res) => {
  const user = {
    name: req.body.name,
    salary: req.body.salary,
    currency: req.body.currency,
    department: req.body.department,
    sub_department: req.body.sub_department,
  };
  db.data.push(user);
  await db.write();
  res.send(db.data);
};

const deleteUser = async (req, res) => {
  const name = req.params.name;
  const data = db.data.filter((item) => item.name !== name);
  db.data = data;
  await db.write();
  res.send({ message: "Deleted" });
};

export { getUsers, addUser, deleteUser };
