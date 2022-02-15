
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/kids';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
module.exports=db;