const growCycleController = require('../components/controller/growCycleController');

module.exports = {
	path: '/api/deleteGrowCycle',
	handler: growCycleController.deleteGrowCycle
}
