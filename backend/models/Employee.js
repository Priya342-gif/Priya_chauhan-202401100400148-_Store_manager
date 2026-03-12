const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        employeeId: {
            type: String,
            unique: true
        },
        fullName: {
            type: String,
            required: [true, "Full name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true
        },
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"]
        },
        department: {
            type: String,
            required: [true, "Department is required"],
            enum: ["HR", "IT", "Finance", "Marketing"]
        },
        designation: {
            type: String,
            required: [true, "Designation is required"]
        },
        salary: {
            type: Number,
            required: [true, "Salary is required"],
            min: [0, "Salary must be positive"]
        },
        dateOfJoining: {
            type: Date,
            required: [true, "Date of joining is required"]
        },
        employmentType: {
            type: String,
            required: true,
            enum: ["Full-time", "Part-time", "Contract"]
        },
        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);