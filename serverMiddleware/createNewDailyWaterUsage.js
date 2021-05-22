const dailyWaterUsageController = require('../components/controller/dailyWaterUsageController');

module.exports = {
	path: '/api/createNewDailyWaterUsage',
	handler: dailyWaterUsageController.createNewDailyWaterUsage
}
