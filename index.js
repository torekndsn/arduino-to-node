const express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var potentiometer = 0; 

app.get('/set_pressure', function(request, response) {
  potentiometer = request.query.val;
  response.send('potentiometer set to '+potentiometer);
});

app.get('/get_pressure', function(request, response) {
  response.send(String(potentiometer));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

