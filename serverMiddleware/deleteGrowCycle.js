const growCycleController = require('../controller/growCycleController');

module.exports = {
	path: '/api/deleteGrowCycle',
	handler: growCycleController.deleteGrowCycle
}
