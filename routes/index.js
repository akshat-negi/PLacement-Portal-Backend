const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const accountRoutes = require("./account");
const departmentRoutes = require("./department");
const courseRoutes = require("./course");
const studentRoutes = require("./student");

router.use("/", authRoutes);
router.use("/", accountRoutes);
router.use("/", departmentRoutes);
router.use("/", courseRoutes);
router.use("/", studentRoutes);

module.exports = router;
