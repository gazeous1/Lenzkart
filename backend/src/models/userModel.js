var mongoose = require('mongoose');
//const validator = require('validator');

var Schema = mongoose.Schema;

// const userSchema = new Schema({
//   firstname: {
//     type: String,
//     required: true,
//   },
//   lastname: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,  // Missing colon here
//     trim: true,
//     validate: {
//       validator: value => validator.isEmail(value),
//       message: 'Invalid Email address',
//     },
//     match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,  // Fixed regex
//   },
//   password: {
//     type: String,
//     required: [true, 'Please add a Password'],
//     minlength: 6,
//     select: false,
//   },
// });

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
