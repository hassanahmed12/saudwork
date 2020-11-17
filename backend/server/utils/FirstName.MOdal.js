const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FirstNameSchema = new Schema({
  
    firstName:{type:String},
city:{
  type:String
},
contactno:{
  type:String
}
})

const FirstName = mongoose.model('FirstName', FirstNameSchema);

module.exports = FirstName;