const DailyWaterUsage = require('../components/models/dailyWaterUsage');

module.exports = {
	path: '/api/createNewDailyWaterUsage',
	handler: function (req, res) {
		DailyWaterUsage.create(req.body)
			.then(result => {
				res.status(201).json(result)
			})
			.catch(err => res.json(err))
	}
}
