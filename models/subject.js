'use strict';
module.exports = (mongoose, models) => {
  let subjectSchema = mongoose.Schema({
    course: String
  });
  let Subject = mongoose.models('Subject', subjectSchema);
  module.Subject = Subject;
}
