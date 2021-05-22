import growCycleController from '../server/controller/growCycleController';

module.exports = {
	path: '/api/getAllGrowCycles',
	handler: growCycleController.getAllGrowCycles
}