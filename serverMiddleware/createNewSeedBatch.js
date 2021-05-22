const SeedBatch = require('./models/seedBatch');

module.exports = {
	path: '/api/createNewSeedBatch',
	handler: function (req, res) {
		console.log('req: ', req.body);
		SeedBatch.create(req.body)
			.then(result => {
				console.log('result: ', result);
				res.status(201).json(result)
			})
			.catch(err => res.json(err))
	}
}
