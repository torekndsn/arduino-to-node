
var express = require("express");
var app = express(); 

app.set('port', (process.env.PORT || 5000));

var potentiometer = 0; 

app.get('/set_value', function(request, response){
	potentiometer = request.query.val;
	respone.send('potentiometer value set to ' + potentiometer);
});

app.listen(app.get('port'), function(){
	console.log("Node app is running at localHost:" + app.get('port'));
});
