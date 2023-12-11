var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb_test");
var clientSchema = mongoose.Schema({
 lastname : String,
 firstname : String,
 address : String
});
// creation of the Client class associated with the clients 
// collection
var Client = mongoose.model("clients", clientSchema);

var c = new Client({lastname :"Clinton", firstname:"Bill", address:"Washington"});
console.log("Before the save() statement");
// create the document in memory
Client.create({lastname:"Obama", firstname:"Barack", address:"Washington"}).then(function(doc) {
  console.log("The client is inserted into the collection", 
  doc);
});


console.log("After the create() statement");
