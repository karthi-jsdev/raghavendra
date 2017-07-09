const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/hockey',function(err,db){
	if(err){
		console.log(err);
	}
	else{
		console.log("connected successfully");
	}
	/*db.collection('players').find().toArray().then(function(docs,err){
	console.log(JSON.stringify(docs,undefined,2));
		
	});*/
	
	db.collection('players').find().count().then(function(count,err){
	console.log('todos count'+count);
		
	});
});
