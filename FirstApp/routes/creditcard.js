var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('creditcard', {
		title : 'Express'
	});
});

/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log(req.body.name);
	console.log(req.body.user_name);
	var name = req.body.user_name;
	var cardno = req.body.user_cardno;
	var valid = isCardValid(cardno);
	if (valid) {
		res.send('valid card for name  =' + name);
	} else
		res.send('Invalid card for name  =' + name);
});

function isCardValid(cardno) {
	console.log('inside isCardValid');

	if (cardno.toString().length == 16) {
		return true;
	} else {
		return false;
	}

}
module.exports = router;
