var express = require('express');
var router = express.Router();

var auth = require('../auth/authService');
var uq = require('../queries/userQueries');

router
.get('/id/:id', auth.ensure, function (req, res, next) {
	uq.getById(req.params.id)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/phone/:phone', auth.ensure, function (req, res, next) {
	uq.getByPhone(req.params.phone)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/station/:station', auth.ensure, function (req, res, next) {
	uq.getByStation(req.params.station)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('/all', auth.ensure, function (req, res, next) {
	uq.getAll()
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.get('', auth.ensure, function (req, res, next) {
	uq.getByGroup(req.query.group, req.query.station)
	.then(data => res.ok(data))
	.catch(err => res.error(err))
})

.post('/new', auth.ensure, function (req, res, next) {
	uq.addNew(
		req.body.name,
		req.body.phone,
		req.body.type,
		req.body.skills,
		req.body.station)
	.then(data => res.created(data))
	.catch(err => res.error(err))
})


module.exports = router;