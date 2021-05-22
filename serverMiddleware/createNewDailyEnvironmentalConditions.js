const dailyEnvironmentalConditionsController = require('../components/controller/dailyEnvironmentalConditionsController');

module.exports = {
	path: '/api/createNewDailyEnvironmentalConditions',
	handler: dailyEnvironmentalConditionsController.createNewDailyEnvironmentalConditions
}
