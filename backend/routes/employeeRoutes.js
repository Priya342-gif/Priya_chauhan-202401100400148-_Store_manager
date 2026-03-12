const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Create employee
router.post("/", employeeController.createEmployee);

// Get all employees
router.get("/", employeeController.getAllEmployees);

// Search employee (must be above /:id)
router.get("/search", employeeController.searchEmployee);

// Get employee by ID
router.get("/:id", employeeController.getEmployeeById);

// Update employee
router.put("/:id", employeeController.updateEmployee);

// Delete employee
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
