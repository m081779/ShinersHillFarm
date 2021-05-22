import growCycleController from '../server/controller/growCycleController';


module.exports = {
	path: '/api/updateAllGrowCycles',
	handler: growCycleController.updateAllGrowCycles
}
