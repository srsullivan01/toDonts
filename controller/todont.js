var express = require('express');
var router = express.Router();
var data = require('../data');

/*index*/
router.get('/', function (req, res) {
  res.render('todont/index', {
    todont: data.seededToDonts
  });
});

/*new*/
router.get('/new', function (req, res){
  res.render('todont/new');
});

/*show*/
router.get('/:id', function (req, res) {
  var id = req.params.id;
  var todont = data.seededToDonts[id]
  res.render('todont/show', {
    todont: todont,
    id: id
  });
});

/*update*/
router.put('/:id', function(req, res) {
  var id = req.params.id;
  var todont = data.seededToDonts[id];
  todont.description = req.body.description;
  todont.urgent = req. body.urgent;
  res.method = "GET";
  res.redirect(`/todont/${id}`);
});

/*save*/
router.post('/', function (req, res) {
  var newTodont = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededToDonts.push(newTodont);
  res.redirect('/todont');
});

router.get(':id/edit', function(req, res) {
  var id = req.params.id;
  var todont = data.seededToDonts[id];
  res.render("todont/edit", {
    todont: todont,
    id: id
  });
});
/*delete*/
router.delete('/:id', function(req, res) {
  data.seededToDonts.splice(req.params.id, 1);
  res.redirect('/todont');
});

module.exports = router;
