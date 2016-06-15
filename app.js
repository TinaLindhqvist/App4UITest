var express = require('express');
var app = express();
app.use(app.router);
app.use(express.errorHandler());
app.set('view engine', 'jade');
app.get('/', function(req, res){
	res.render('index');
});
var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || 3000);
app.listen(port, host);
console.log('App started on port ' + port);
