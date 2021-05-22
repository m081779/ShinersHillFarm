const growCycleController = require('../controller/growCycleController');

module.exports = {
	path: '/api/getAllGrowCycles',
	handler: growCycleController.getAllGrowCycles
}