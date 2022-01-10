const express = require("express");
const router = express.Router();

// middleware
const { cekAuth } = require("../middleware/auth");

const { Register, Login } = require("../controllers/authuser");
// Authentication
router.post("/register", Register);
router.post("/login", Login);

// manage users
const { getAllUser, UpdateUser, deleteUser } = require("../controllers/user");
router.get("/users", cekAuth, getAllUser);
router.put("/user/:id", cekAuth, UpdateUser);
router.delete("/user/:id", cekAuth, deleteUser);

module.exports = router;
