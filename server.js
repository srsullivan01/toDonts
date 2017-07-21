/*packages*/
var path = require('path');
var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/* app settings */
var app = express();
var port = process.env.PORT || 3000;

/* application params */
var TodontController = require('./controller/todont');

/*views*/
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.use('/todont', TodontController);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

/*home*/
app.get('/', function(req, res) {
  res.send('this is the home page');
});

/*start server */
app.listen(port, function() {
  console.log('server up and listening on ' + port);
});
