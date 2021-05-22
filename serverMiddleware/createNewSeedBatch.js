const seedBatchController = require('../controller/seedBatchController');

module.exports = {
	path: '/api/createNewSeedBatch',
	handler: seedBatchController.createNewSeedBatch
}
