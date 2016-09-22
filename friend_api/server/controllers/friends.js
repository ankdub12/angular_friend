var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req, res){
		Friend.find({}, function(err, friend){
			console.log(Friend);
			res.json({friend: friend});
		})
  	};

  	this.create = function(req,res){
 		res.json({placeholder:'create'});
  	};

  	this.update = function(req,res){
    //your code here
    	res.json({placeholder:'update'});
  	};
  	this.delete = function(req,res){
    //your code here
    	res.json({placeholder:'delete'});
  	};
  	this.show = function(req,res){
    	Friend.findOne({_id: req.params.id}, function(err, friend){
    		res.json({friend: friend});
    	})
  	};

}

module.exports = new FriendsController();