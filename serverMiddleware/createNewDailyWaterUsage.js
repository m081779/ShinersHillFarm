import dailyWaterUsageController from '../server/controller/dailyWaterUsageController';


module.exports = {
	path: '/api/createNewDailyWaterUsage',
	handler: dailyWaterUsageController.createNewDailyWaterUsage
}
