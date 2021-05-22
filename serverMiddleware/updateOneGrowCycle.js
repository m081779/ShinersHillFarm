const growCycleController = require('../controller/growCycleController');

module.exports = {
	path: '/api/updateOneGrowCycle',
	handler: growCycleController.updateOneGrowCycle
}