const GrowCycle = require('../components/models/growCycle');

module.exports = {
	path: '/api/updateOneGrowCycle',
	handler: function (req, res) {
		const { id, data } = req.body;
		GrowCycle.findOneAndUpdate({ _id: id }, { ...data }, { new: true })
			.populate('seedBatch')
			.populate('dailyWaterUsage')
			.populate('dailyEnvironmentalConditions')
			.populate('dailyEnvironmentalConditions')
			.populate('dailyGrowNotes')
			.then(result => {
				res.status(200).json(result)
			})
			.catch(err => res.json(err))
	}
}