var mongoose = require('mongoose');



var ProductSchema = new mongoose.Schema({
  name: {
        type: String,
        minlength: [3, "name must be at least three characters"],
        required: [true,'Pet name is required']
  },
  type :{
  	   type: String,
       minlength: [3, "type must be at least three characters"],
  	    required: [true,'Pet type is required']
  },

  description:{
  	type: String,
  	minlength:[3, "description must be at least three characters"],
  	required: [true,'Pet description is required']
  },
  skill1: {
      type:String,
      required: false
  },
  skill2: {
      type:String,
      required: false
  },
  skill3: {
      type:String,
      required: false
  }

})

var Product = mongoose.model('Product', ProductSchema)
module.exports = Product
