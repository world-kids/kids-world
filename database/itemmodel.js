const mongoose =require("mongoose")
const db =require('./index')
const bcrypt = require("bcrypt")
const Salt = 10



const kidSchema= new mongoose.Schema({
    email:String,
    password:String,
    username:String,
    score:Number
})
const adminSchema= new mongoose.Schema({
 question:String,
 firstAnswer:Object,
 secondAnswer:Object,
 thirdAnswer:Object,
 forthAnswer:Object,
 category:String,
})


kidSchema.pre("save", function (next) {
    var user = this
    bcrypt.genSalt(Salt, function (err, salt) {
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err)
        } else {
          user.password = hash
          next()
        }
      })
    })
  
  })
  kidSchema.methods.comparePassword = function (inputPass, callback) {
    bcrypt.compare(inputPass, this.password, function (err, isMatch) {
      if (err) {
        callback(err, null)
      } else {
        callback(null, isMatch)
      }
    })
  }

const User= mongoose.model("User",kidSchema)
const Admin= mongoose.model("Admin",adminSchema)
module.exports = {User,Admin};