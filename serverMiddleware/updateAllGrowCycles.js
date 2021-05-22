const growCycleController = require('../controller/growCycleController');

module.exports = {
	path: '/api/updateAllGrowCycles',
	handler: growCycleController.updateAllGrowCycles
}
