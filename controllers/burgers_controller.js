const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

//get route on root displays all burgers 
router.get('/', (req,res) => {
	burger.selectAll('burgers', result => {
		res.render('index', {burgers: result})
	});
});

//post api route inserts burger in to database
router.post('/api/burger', (req,res) => {
	let name = req.body.burger_name;
	burger.insertOne('burgers', 'burger_name', name, result => {
		console.log(`One row inserted at id ${result.insertId}`);
		res.status(200).end();
	});
	
});

//put api route modifies devoured boolean of selected burger
router.put('/api/:burger', (req,res) => {
	let id = req.params.burger
	burger.updateOne('burgers', 'devoured', 1, 'id', id, result => {
		console.log('Result from put request: ',result.message);
		console.log("Rows updated: "+result.affectedRows)
		res.status(200).end();
	});
});

module.exports = router;