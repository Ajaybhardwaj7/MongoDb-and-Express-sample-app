var express = require('express');
var router = express.Router();
var logger = require('../logger');


/* GET home page. */

		router.get('/', function(req, res, next) {

		  var cursor = db.collection('quotes').find();
		  cursor.toArray(function(err , results){
		  	
		  	res.render('index' , { 'results' : results , 'title' : 'Express and MongoDB'});
		  	
		  })
		 
		});
		router.post('/', function(req, res, next) {
			db.collection('quotes').save(req.body , function(err , result){
				  if (err) return logger.info(err);

    			res.redirect('/');
			});

		});
		router.get('/recent', function(req, res, next) {
			res.render('quotes' );
      });

module.exports = router;
