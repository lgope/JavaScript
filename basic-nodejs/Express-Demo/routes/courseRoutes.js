const express = require("express");
const courseController = require("../controllers/courseController");

const router = express.Router();

// router.route("/").get(helloWorld);

router.param("id", courseController.checkID);

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);

router
  .route("/:id")
  .get(courseController.getCourse)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
