const seedBatchController = require('../components/controller/seedBatchController');

module.exports = {
	path: '/api/createNewSeedBatch',
	handler: seedBatchController.createNewSeedBatch
}
