import express from "express";
import mongoose from "mongoose";
import {PORT} from "./constants"
const app = express();

const MONGO_URL = "mongodb://localhost:27017/collegeDB";

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Define a simple schema and model
const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  rollNumber: Number,
  branch: String,
  section: String,
});
const Student = mongoose.model("Student", StudentSchema);

// Routes
app.get("/", (req, res) => {
  res.send("API is running");
});
// Get all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.send({ message: "Students fetched successfully", data: students });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// Create a new student
app.post("/api/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res
      .status(201)
      .send({ message: "Student created successfully", data: student });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// Get a student by ID
app.get("/api/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send({ message: "Student fetched successfully", data: student });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// Update a student by ID
app.put("/api/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send({ message: "Student updated successfully", data: student });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
// Delete a student by ID
app.delete("/api/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send({ message: "Student not found" });
    res.send({ message: "Student deleted successfully", data: student });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
