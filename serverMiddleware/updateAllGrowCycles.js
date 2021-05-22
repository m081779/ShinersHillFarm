const growCycleController = require('../components/controller/growCycleController');

module.exports = {
	path: '/api/updateAllGrowCycles',
	handler: growCycleController.updateAllGrowCycles
}
