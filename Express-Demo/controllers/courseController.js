const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" }
];

exports.checkID = (req, res, next, val) => {
  console.log(`Course id is: ${val}`);

  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res
      .status(404)
      .send("The course with the given ID was not found. 🙁");
  }
  next();
};

exports.helloWorld = (req, res) => {
  res.send("Hello World!!");
};

exports.getAllCourses = (req, res) => {
  res.send(courses);
};

exports.getCourse = (req, res) => {
  const id = parseInt(req.params.id) - 1;

  res.send(courses[id]);
};

exports.createCourse = (req, res) => {
  // Validate
  const { error } = validateCourse(req.body);

  // If invalid, return 400 - Bad request
  if (error)
    // 400 Bad Request
    return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
};

exports.updateCourse = (req, res) => {
  // Look up the course
  const course = courses.find(c => c.id === parseInt(req.params.id));

  // Validate
  const { error } = validateCourse(req.body);

  // If invalid, return 400 - Bad request
  if (error)
    // 400 Bad Request
    return res.status(400).send(error.details[0].message);

  // Update course
  course.name = req.body.name;

  // Return the updated course
  res.send(course);
};

exports.deleteCourse = (req, res) => {
  // Look up the course
  const course = courses.find(c => c.id === parseInt(req.params.id));

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  // Return the same course
  res.send(course);
};

const validateCourse = course => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(course, schema);
};
