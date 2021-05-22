import growCycleController from '../server/controller/growCycleController';


module.exports = {
	path: '/api/updateOneGrowCycle',
	handler: growCycleController.updateOneGrowCycle
}