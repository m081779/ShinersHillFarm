const growCycleController = require('../components/controller/growCycleController');

module.exports = {
	path: '/api/createNewGrowCycle',
	handler: growCycleController.createNewGrowCycle
}
