const express = require("express");
const router = express.Router();

// middleware
const { cekAuth } = require("../middleware/auth");

const { Register, Login } = require("../controllers/authuser");
// Authentication
router.post("/register", Register);
router.post("/login", Login);

// manage users
const { getAllUser } = require("../controllers/user");
router.get("/users", cekAuth, getAllUser);
module.exports = router;
