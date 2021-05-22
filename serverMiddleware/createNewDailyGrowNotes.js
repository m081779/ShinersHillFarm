const dailyGrowNotesController = require('../controller/dailyGrowNotesController');

module.exports = {
	path: '/api/createNewDailyGrowNotes',
	handler: dailyGrowNotesController.createNewDailyGrowNotes
}
