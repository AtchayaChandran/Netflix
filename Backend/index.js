const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    /\.vercel\.app$/   
  ],
  credentials: true,
}));

app.use(express.json());


const isVercel = process.env.VERCEL === "1";
let memoryUsers = []; 

const USERS_FILE = path.join(__dirname, "users.json");

function loadUsers() {
  try {
    if (isVercel) return memoryUsers;

    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, JSON.stringify([]), "utf8");
      return [];
    }
    const raw = fs.readFileSync(USERS_FILE, "utf8").trim();
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error("loadUsers error:", err);
    return [];
  }
}


function saveUsers(users) {
  try {
    if (isVercel) {
      memoryUsers = users;
    } else {
      fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
    }
  } catch (err) {
    console.error("saveUsers error:", err);
  }
}

function badReq(res, msg) {
  return res.status(400).json({ success: false, message: msg });
}

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return badReq(res, "username and password required");

  let users = loadUsers();
  if (users.find(u => u.username === username)) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ username, password });
  saveUsers(users);
  res.json({ success: true, message: "Signup successful" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return badReq(res, "username and password required");

  let users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) return res.json({ success: true, message: "Login successful" });
  return res.json({ success: false, message: "Invalid credentials" });
});

app.get("/", (req, res) => res.send("✅ Backend is running"));


if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
}


module.exports = app;


process.on("unhandledRejection", err => console.error("unhandledRejection:", err));
process.on("uncaughtException", err => console.error("uncaughtException:", err));
