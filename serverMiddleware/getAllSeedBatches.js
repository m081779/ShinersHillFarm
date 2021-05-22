const seedBatchController = require('../components/controller/seedBatchController');

module.exports = {
	path: '/api/getAllSeedBatches',
	handler: seedBatchController.getAllSeedBatches
}