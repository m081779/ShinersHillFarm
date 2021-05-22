const GrowCycle = require('../components/models/growCycle');

module.exports = {
	path: '/api/updateAllGrowCycles',
	handler: function (req, res) {
		const { idArray, payload } = req.body;
		GrowCycle.updateMany(
			{
				_id: { "$in": idArray }
			},
			payload,
			{ "multi": true })
			.then(result => {
				res.status(200).json(result)
			})
			.catch(err => res.json(err))
	}
}
