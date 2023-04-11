const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://shivamshah1210:Shivam%401210@shivamshah.esyzuxe.mongodb.net/test");

  
var userschema = mongoose.Schema({
    firstname:String,
    lastname:String,
    signpassword:String
})  
                            // name of database  
module.exports = mongoose.model("user", userschema);