const GrowCycle = require('../components/models/growCycle');

module.exports = {
	path: '/api/deleteGrowCycle',
	handler: function (req, res) {
		const baseURL = 'http://' + req.headers.host + '/';
		const params = new URL(req.url, baseURL).searchParams;
		const _id = params.get('id');
		GrowCycle.deleteOne({ _id })
			.then(result => {
				res.status(200).json(result)
			})
			.catch(err => res.json(err))
	}
}
