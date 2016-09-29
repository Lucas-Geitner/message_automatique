const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mydb");

follorwerSchema = {
  id_twitter: { type: Number, validate : function(value, respond){
    var id_twitter = this.id_twitter;
    Follower.findOne({id_twitter: id_twitter}, function(err, follower){
      if (follower) respond(false);
      else respond(true);
    });
  }},
  done: Boolean,
};

var Follower = mongoose.model("Follower", follorwerSchema);

// URL


exports.list = function(req, res){
  res.send("Lalala");
  var c = new Follower({id_twitter: 200000, done: true});
  console.log(c);
  c.save(function(err){
    console.log("2");
    if(err){
      for (var prop in err.errors){
        var message = err.errors[prop].message;
        console.log(message);
      }
    }
    console.log("Liste des fans : ");
    Follower.find(function(err, fans){
      console.log(fans);
    })
  })
};
