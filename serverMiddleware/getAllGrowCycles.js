const growCycleController = require('../components/controller/growCycleController');

module.exports = {
	path: '/api/getAllGrowCycles',
	handler: growCycleController.getAllGrowCycles
}