const dailyGrowNotesController = require('../components/controller/dailyGrowNotesController');

module.exports = {
	path: '/api/createNewDailyGrowNotes',
	handler: dailyGrowNotesController.createNewDailyGrowNotes
}
