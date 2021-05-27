const Mongoose = require("mongoose");

const authSchema = new Mongoose.Schema({
  authorName: {
    type: String,
    require: true,
  },
  bookName: {
    type: String,
    require: true,
  },
});

module.exports=Mongoose.model('Authorbooks', authSchema);
