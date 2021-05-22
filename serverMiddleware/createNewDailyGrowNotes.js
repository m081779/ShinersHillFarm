const DailyGrowNotes = require('./models/dailyGrowNotes');

module.exports = {
	path: '/api/createNewDailyGrowNotes',
	handler: function (req, res) {
		DailyGrowNotes.create(req.body)
			.then(result => {
				res.status(201).json(result)
			})
			.catch(err => res.json(err))
	}
}
