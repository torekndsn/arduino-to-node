const express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var potentio = 100; 

app.get('/set_potentio', function(request, response) {
  potentio = request.query.val;
  response.send('potentiometer set to '+ potentio);
});

app.get('/get_potentio', function(request, response) {
  response.send(String(potentio));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

