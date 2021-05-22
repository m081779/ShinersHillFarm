import seedBatchController from '../server/controller/seedBatchController';


module.exports = {
	path: '/api/createNewSeedBatch',
	handler: seedBatchController.createNewSeedBatch
}
