const DailyEnvironmentalConditions = require('../components/models/dailyEnvironmentalConditions')

module.exports = {
	path: '/api/createNewDailyEnvironmentalConditions',
	handler: function (req, res) {
		DailyEnvironmentalConditions.create(req.body)
			.then(result => {
				res.status(201).json(result)
			})
			.catch(err => res.json(err))
	},
}
