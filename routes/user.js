
/*
 * GET users listing.
 */
var scores=[];//array

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.save = function(req, res){
	scores.push(req.query.scores);

  console.log("your scores"+scores);

};