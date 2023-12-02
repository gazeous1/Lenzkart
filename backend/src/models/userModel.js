var mongoose = require('mongoose');
//const validator = require('validator');

var Schema = mongoose.Schema;



var userSchema = new Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required:true
      
    }
  });
  


// Create a model
const user = mongoose.model('user', userSchema);

// Export the model
module.exports = user;
