const SeedBatch = require('./models/seedBatch');

module.exports = {
	path: '/api/getAllSeedBatches',
	handler: function (req, res) {
		const searchObject = req.body;
		SeedBatch.find(searchObject)
			.then(result => {
				res.status(200).json(result)
			})
			.catch(err => res.json(err))
	}
}