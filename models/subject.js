'use strict';
module.exports = (mongoose, models) => {
  let subjectSchema = mongoose.Schema({
    course: String
  });
  let Subject = mongoose.model('Subject', subjectSchema);
  models.Subject = Subject;
}
