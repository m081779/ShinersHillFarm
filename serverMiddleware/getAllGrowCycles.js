const GrowCycle = require('../components/models/growCycle');

module.exports = {
	path: '/api/getAllGrowCycles',
	handler: function (req, res) {
		GrowCycle
			.find({})
			.populate('seedBatch')
			.populate('dailyWaterUsage')
			.populate('dailyEnvironmentalConditions')
			.populate('dailyEnvironmentalConditions')
			.populate('dailyGrowNotes')
			.then(result => {
				res.status(200).json(result)
			})
			.catch(err => console.log(err))
	}
}