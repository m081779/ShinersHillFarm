const seedBatchController = require('../controller/seedBatchController');

module.exports = {
	path: '/api/getAllSeedBatches',
	handler: seedBatchController.getAllSeedBatches
}