import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { groupBy, getMin, getMax, getMean } from "../services/SSService.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "../../db/db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

const getSS = (req, res) => {
  const min = getMin(db.data);
  const max = getMax(db.data);
  const mean = getMean(db.data);
  res.send({ min, max, mean });
};

const getSSOnContract = (req, res) => {
  const data = db.data.filter(
    (item) => item.on_contract != undefined && item.on_contract === "true"
  );
  const min = getMin(data);
  const max = getMax(data);
  const mean = getMean(data);
  res.send({ min, max, mean });
};

const getSSWithDepartment = (req, res) => {
  const groupedData = groupBy(db.data, (user) => user.department);
  const array = Array.from(groupedData);
  const dataWithDepartment = db.data.map((item) => {
    const data = groupedData.get(item.department);
    const min = getMin(data);
    const max = getMax(data);
    const mean = getMean(data);
    return { department: item.department, min, max, mean };
  });
  res.send(dataWithDepartment);
};

const getSSWithSubDepartment = (req, res) => {
  const groupedData = groupBy(db.data, (user) => user.department);
  const dataWithDepartment = db.data.map((item) => {
    const data = groupedData.get(item.department);
    const min = getMin(data);
    const max = getMax(data);
    const mean = getMean(data);
    return { department: item.department, min, max, mean };
  });
  res.send(dataWithDepartment);
};

export { getSS, getSSOnContract, getSSWithDepartment, getSSWithSubDepartment };
