const dailyWaterUsageController = require('../controller/dailyWaterUsageController');

module.exports = {
	path: '/api/createNewDailyWaterUsage',
	handler: dailyWaterUsageController.createNewDailyWaterUsage
}
