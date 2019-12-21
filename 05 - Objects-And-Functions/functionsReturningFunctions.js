function interviewQuestion(job) {
  if (job == "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job == "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else if (job == "developer") {
    return function (name) {
      console.log(name + " how many project's have you done?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");

var designerQuestion = interviewQuestion("designer");
designerQuestion("Thor");

designerQuestion("Jane");
designerQuestion("Mark");
designerQuestion("Mike");
designerQuestion("Hulk");

// more easy way we can do this because this is evaluated from left to right
interviewQuestion("teacher")("Tony");
interviewQuestion("designer")("Stark");
interviewQuestion("developer")("Lakshman");