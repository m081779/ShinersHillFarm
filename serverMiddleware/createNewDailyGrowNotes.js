import dailyGrowNotesController from '../server/controller/dailyGrowNotesController';


module.exports = {
	path: '/api/createNewDailyGrowNotes',
	handler: dailyGrowNotesController.createNewDailyGrowNotes
}
