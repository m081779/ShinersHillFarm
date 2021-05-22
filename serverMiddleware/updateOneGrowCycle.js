const growCycleController = require('../components/controller/growCycleController');

module.exports = {
	path: '/api/updateOneGrowCycle',
	handler: growCycleController.updateOneGrowCycle
}