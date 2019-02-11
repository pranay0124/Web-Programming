var mongoose = require('mongoose');


var schema = mongoose.Schema;


var beautySchema = new schema ({
    imageurl:Array,
     id: String,
     brand: String,
     title: String,
     shortdescription: String,
     longdescription: String,
     price: Number,
     quantity: Number,
     count: Number,
     rating: Array,
     comments: Array


});


module.exports = mongoose.model('beauty',beautySchema);