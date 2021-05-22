const growCycleController = require('../controller/growCycleController');

module.exports = {
	path: '/api/createNewGrowCycle',
	handler: growCycleController.createNewGrowCycle
}
