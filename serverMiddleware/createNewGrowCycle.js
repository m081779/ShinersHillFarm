const GrowCycle = require('../components/models/growCycle');

module.exports = {
	path: '/api/createNewGrowCycle',
	handler: function (req, res) {
		GrowCycle.create(req.body)
			.then(result => {
				res.status(201).json(result)
			})
			.catch(err => res.json(err))
	}
}
