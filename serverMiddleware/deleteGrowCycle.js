import growCycleController from '../server/controller/growCycleController';


module.exports = {
	path: '/api/deleteGrowCycle',
	handler: growCycleController.deleteGrowCycle
}
